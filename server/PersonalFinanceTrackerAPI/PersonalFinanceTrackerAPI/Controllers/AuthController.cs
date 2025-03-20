using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using PersonalFinanceTrackerAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PersonalFinanceTrackerAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        // ✅ Register User API
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest registerUser)
        {
            if (_context.Users.Any(u => u.Email == registerUser.Email))
            {
                return BadRequest("User already exists.");
            }

            var user = new User
            {
                Name = registerUser.Name,
                Email = registerUser.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(registerUser.Password),
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok("User registered successfully.");
        }

        // ✅ Login API (Fixed Name Issue)
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest loginUser)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == loginUser.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginUser.Password, user.PasswordHash))
            {
                return Unauthorized("Invalid credentials.");
            }

            var token = GenerateJwtToken(user);
            return Ok(new { token });
        }

        // ✅ JWT Token Generator
        private string GenerateJwtToken(User user)
        {
            var jwtSettings = _configuration.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]));

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("id", user.Id.ToString())
            };

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }

    // ✅ Register Request Model (Fixing Name Issue)
    public class RegisterRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    // ✅ Login Request Model (Now Only Requires Email & Password)
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PersonalFinanceTrackerAPI.Models;
using System.Security.Claims;

namespace PersonalFinanceTrackerAPI.Controllers
{
    [Route("api/user")]
    [ApiController]
    [Authorize] // Require JWT for all routes
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("profile")]
        public IActionResult GetUserProfile()
        {
            var userId = int.Parse(User.FindFirst("id")?.Value);
            var user = _context.Users.Find(userId);
            if (user == null) return NotFound("User not found");

            return Ok(new { user.Id, user.Name, user.Email, user.CreatedAt });
        }
    }
}

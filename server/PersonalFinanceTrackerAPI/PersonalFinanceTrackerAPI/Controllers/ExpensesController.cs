using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PersonalFinanceTrackerAPI.Models;
using System.Security.Claims;

namespace PersonalFinanceTrackerAPI.Controllers
{
    [Route("api/expenses")]
    [ApiController]
    [Authorize] // Require JWT authentication for all endpoints
    public class ExpensesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ExpensesController(AppDbContext context)
        {
            _context = context;
        }

        // ✅ Add Expense
        [HttpPost("add")]
        public IActionResult AddExpense([FromBody] Expense expense)
        {
            var userId = int.Parse(User.FindFirst("id")?.Value);
            expense.UserId = userId;
            _context.Expenses.Add(expense);
            _context.SaveChanges();

            return Ok(new { message = "Expense added successfully." });
        }

        // ✅ Get Expenses (With Filtering & Pagination)
        [HttpGet]
        public IActionResult GetExpenses([FromQuery] string? category, [FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate, [FromQuery] int page = 1, [FromQuery] int pageSize = 5)
        {
            var userId = int.Parse(User.FindFirst("id")?.Value);
            var query = _context.Expenses.Where(e => e.UserId == userId);

            // Apply category filter
            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(e => e.Category == category);
            }

            // Apply date range filter
            if (startDate.HasValue && endDate.HasValue)
            {
                query = query.Where(e => e.Date >= startDate && e.Date <= endDate);
            }

            // Apply pagination
            var totalExpenses = query.Count();
            var expenses = query
                .OrderByDescending(e => e.Date)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return Ok(new { totalExpenses, expenses });
        }

        // ✅ Delete Expense by ID
        [HttpDelete("{id}")]
        public IActionResult DeleteExpense(int id)
        {
            var userId = int.Parse(User.FindFirst("id")?.Value);
            var expense = _context.Expenses.FirstOrDefault(e => e.Id == id && e.UserId == userId);

            if (expense == null)
            {
                return NotFound(new { message = "Expense not found." });
            }

            _context.Expenses.Remove(expense);
            _context.SaveChanges();

            return Ok(new { message = "Expense deleted successfully." });
        }
    }
}

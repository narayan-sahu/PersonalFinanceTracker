namespace PersonalFinanceTrackerAPI.Models
{
    public class Expense
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal Amount { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }

        // Navigation Property (Optional)
        public User User { get; set; }
    }
}

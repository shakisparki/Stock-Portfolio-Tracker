namespace Portfolio_Tracker.Server.Identity.Entities
{
    public class Users
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public required string PasswordHash { get; set; }
        public required string Email { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}

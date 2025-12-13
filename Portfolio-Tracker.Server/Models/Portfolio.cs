namespace Portfolio_Tracker.Server.Models
{
    public class PortfolioResponse
    {
        public List<Portfolio> Portfolios { get; set; } = [];
    }

    public class Portfolio
    {
        public int Id { get; set; }
        public required string Ticker { get; set; }
        public decimal Shares { get; set; }
        public decimal PurchasePrice { get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}

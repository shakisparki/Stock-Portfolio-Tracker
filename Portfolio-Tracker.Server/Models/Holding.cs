namespace Portfolio_Tracker.Server.Models
{
    public class PortfolioResponse
    {
        public List<Holding> Holdings { get; set; } = [];
    }

    public class Holding
    {
        public int Id { get; set; }
        public required string Ticker { get; set; }
        public decimal Shares { get; set; }
        public decimal PurchasePrice { get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}

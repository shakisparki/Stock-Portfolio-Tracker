
namespace Portfolio_Tracker.Server.Models
{
    public class PricesResponse
    {
        public List<MarketPrice> Prices { get; set; } = [];
    }

    public class MarketPrice
    {
        public required string Ticker { get; set; }
        public decimal CurrentPrice { get; set; }
        public decimal ChangePercent { get; set; }
        public List<HistoricalPrice> Historical { get; set; } = [];
    }

    public class HistoricalPrice
    {
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
    }
}

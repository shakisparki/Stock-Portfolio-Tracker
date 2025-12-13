namespace Data.Server.Entities
{
    public class Stockholdings
    {
        public int Id { get; set; }
        public required string Ticker { get; set; }
        public decimal Shares { get; set; }
        public decimal PurchasePrice { get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}

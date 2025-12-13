using Microsoft.AspNetCore.Mvc;
using Portfolio_Tracker.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio_Tracker.Server.Controllers
{
    [Route("api/market/[controller]")]
    [ApiController]
    public class PricesController : ControllerBase
    {
        // GET api/<PricesController>/5
        [HttpGet]
        public PricesResponse Get([FromQuery] string tickers)
        {
            var rand = new Random();
            var basePrice = 100m + (decimal)(rand.NextDouble() * 1000.0);
            var historical = GenerateRandomHistory(basePrice);
            var currentPrice = basePrice + (basePrice * (decimal)(rand.NextDouble() * 0.10 - 0.05));
            var changePercent = (basePrice - historical.Last().Price) / basePrice * 100;
            var tickersList = tickers.Split(',');
            return new PricesResponse
            {
                Prices = [.. tickersList.Select(x =>
                    new MarketPrice
                    {
                        Ticker = x.Trim(),
                        CurrentPrice = currentPrice,
                        ChangePercent = changePercent,
                        Historical = historical
                    }
                    )]
            };
        }

        public static List<HistoricalPrice> GenerateRandomHistory(decimal basePrice)
        {
            var history = new List<HistoricalPrice>();
            var rand = new Random();

            for (int i = 1; i <= 30; i++)
            {
                // Random daily variation: ±5%
                decimal variationPercent = (decimal)(rand.NextDouble() * 0.10 - 0.05);
                decimal price = basePrice + (basePrice * variationPercent);

                history.Add(new HistoricalPrice
                {
                    Date = DateTime.UtcNow.Date.AddDays(-i),
                    Price = Math.Round(price, 2)
                });
            }

            // Sort oldest → newest (optional, but usually preferred for charts)
            history.Sort((a, b) => a.Date.CompareTo(b.Date));

            return history;
        }
    }
}

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
            var tickersList = tickers.Split(',');
            return new PricesResponse
            {
                Prices = [.. tickersList.Select(x =>
                    new MarketPrice
                    {
                        Ticker = x.Trim(),
                        CurrentPrice = 150.25m,
                        ChangePercent = 1.5m,
                        Historical =
                        [
                            new() { Date = DateTime.Now.AddDays(-1), Value = 148.00m },
                            new() { Date = DateTime.Now.AddDays(-2), Value = 149.00m },
                            new() { Date = DateTime.Now.AddDays(-3), Value = 147.50m }
                        ]
                    }
                    )]
            };
        }
    }
}

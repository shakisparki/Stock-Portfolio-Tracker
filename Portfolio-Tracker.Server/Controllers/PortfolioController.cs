using Data.Server;
using Data.Server.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio_Tracker.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio_Tracker.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class PortfolioController(PortfolioDbContext portfolioDbContext) : ControllerBase
    {
        // GET: portfolio
        [HttpGet]
        public async Task<ActionResult<PortfolioResponse>> Get()
        {
            var stockholdings = await portfolioDbContext.Stockholdings.Select(x=> new Portfolio {
                Id = x.Id,
                Ticker = x.Ticker,
                Shares = x.Shares,
                PurchasePrice = x.PurchasePrice,
                PurchaseDate = x.PurchaseDate
            }).ToListAsync();
            return Ok(new PortfolioResponse
            {
                Portfolios = stockholdings
            });
        }

        // GET portfolio/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Portfolio>> Get(int id)
        {
            var item = await portfolioDbContext.Stockholdings.Where(x => x.Id == id).Select(x => new Portfolio
            {
                Id = x.Id,
                Ticker = x.Ticker,
                Shares = x.Shares,
                PurchasePrice = x.PurchasePrice,
                PurchaseDate = x.PurchaseDate
            }).FirstOrDefaultAsync();

            return item == null ? NotFound() : Ok(item);
        }

        // POST portfolio
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Portfolio value)
        {
            var item = new Stockholdings
            {
                Ticker = value.Ticker,
                Shares = value.Shares,
                PurchasePrice = value.PurchasePrice,
                PurchaseDate = value.PurchaseDate
            };
            await portfolioDbContext.Stockholdings.AddAsync(item);
            await portfolioDbContext.SaveChangesAsync();
            return Created();
        }

        // PUT portfolio/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Portfolio value)
        {
            var item = await portfolioDbContext.Stockholdings.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (item == null) {
                return NotFound();
            }
            else
            {
                item.Ticker = value.Ticker;
                item.Shares = value.Shares;
                item.PurchasePrice = value.PurchasePrice;
                item.PurchaseDate = value.PurchaseDate;
                await portfolioDbContext.SaveChangesAsync();
            }
            return NoContent();
        }

        // DELETE portfolio/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var item = await portfolioDbContext.Stockholdings.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                portfolioDbContext.Stockholdings.Remove(item);
                await portfolioDbContext.SaveChangesAsync();
            }
            return NoContent();
        }
    }
}

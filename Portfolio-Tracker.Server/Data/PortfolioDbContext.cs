using Microsoft.EntityFrameworkCore;
using Portfolio_Tracker.Server.Data.Entities;

namespace Portfolio_Tracker.Server.Data
{
    public class PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : DbContext(options)
    {
        public DbSet<Stockholdings> Stockholdings { get; set; }
    }
}

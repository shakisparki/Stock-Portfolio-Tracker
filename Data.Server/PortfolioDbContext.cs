using Data.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Server
{
    public class PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : DbContext(options)
    {
        public DbSet<Stockholdings> Stockholdings { get; set; }
    }
}

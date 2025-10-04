using Microsoft.EntityFrameworkCore;
using Portfolio_Tracker.Server.Data.Entities;

namespace Portfolio_Tracker.Server.Identity
{
    public class IdentityDbContext(DbContextOptions<IdentityDbContext> options) : DbContext(options)
    {
        public DbSet<Users> Users { get; set; }

    }
}

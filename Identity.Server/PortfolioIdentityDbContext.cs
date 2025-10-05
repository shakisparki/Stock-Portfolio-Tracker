using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Identity.Server
{
    public class PortfolioIdentityDbContext(DbContextOptions<PortfolioIdentityDbContext> options) : IdentityDbContext(options)
    {

    }
}

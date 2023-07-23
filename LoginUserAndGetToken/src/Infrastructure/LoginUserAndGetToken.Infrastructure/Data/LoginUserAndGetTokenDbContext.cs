using LoginUserAndGetToken.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginUserAndGetToken.Infrastructure.Data
{
    public class LoginUserAndGetTokenDbContext :DbContext
    {
        public LoginUserAndGetTokenDbContext(DbContextOptions<LoginUserAndGetTokenDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}

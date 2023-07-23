using LoginUserAndGetToken.Entities;
using LoginUserAndGetToken.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginUserAndGetToken.Infrastructure.Repositories
{
    public class EFUserRepository : IUserRepository
    {
        private readonly LoginUserAndGetTokenDbContext _context;

        public EFUserRepository(LoginUserAndGetTokenDbContext context)
        {
            _context = context;
        }

        public IList<User?> GetAll()
        {
            return _context.Users.AsNoTracking().ToList();
        }

        public async Task<IList<User?>> GetAllAsync()
        {
            return await _context.Users.AsNoTracking().ToListAsync();
        }
    }
}

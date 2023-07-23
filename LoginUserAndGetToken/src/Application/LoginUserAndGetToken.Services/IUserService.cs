using LoginUserAndGetToken.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginUserAndGetToken.Services
{
    public interface IUserService
    {
        Task<User> ValidateUserAsync(string username, string password);
    }
}

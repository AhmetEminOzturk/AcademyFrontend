using LoginUserAndGetToken.Entities;
using LoginUserAndGetToken.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginUserAndGetToken.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;

        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }

        public async Task<User> ValidateUserAsync(string username, string password)
        {
            var users = await _repository.GetAllAsync();
            return users.SingleOrDefault(u => u.UserName == username && u.Password == password);
        }
    }
}

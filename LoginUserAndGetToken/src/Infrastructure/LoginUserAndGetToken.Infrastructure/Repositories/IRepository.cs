using LoginUserAndGetToken.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginUserAndGetToken.Infrastructure.Repositories
{
    public interface IRepository <T> where T : class, IEntity , new()
    {
        IList<T?> GetAll();
        Task<IList<T?>> GetAllAsync();
    }
}

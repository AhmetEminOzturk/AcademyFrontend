using LoginUserAndGetToken.Infrastructure.Data;
using LoginUserAndGetToken.Infrastructure.Repositories;
using LoginUserAndGetToken.Services;
using Microsoft.EntityFrameworkCore;

namespace LoginUserAndGetToken.Api.Extensions
{
    public static class IoCExtension
    {
        public static IServiceCollection AddInjections(this IServiceCollection services, string connectionString)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository, EFUserRepository>();
            //IoC
            services.AddDbContext<LoginUserAndGetTokenDbContext>(opt => opt.UseSqlServer(connectionString));

            return services;
        }
    }
}

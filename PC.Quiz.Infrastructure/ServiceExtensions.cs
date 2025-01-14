namespace PC.Quiz.Infrastructure
{
    using Microsoft.Extensions.DependencyInjection;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Infrastructure.Data;
    using PC.Quiz.Infrastructure.Data.DbContext;

    public static class ServiceExtensions
    {
        public static void ConfigureInfrastructure(this IServiceCollection service)
        {
            service.AddDbContext<QuizContext>();
            service.AddScoped<IUnitOfWork, UnitOfWork>();
        }
    }
}

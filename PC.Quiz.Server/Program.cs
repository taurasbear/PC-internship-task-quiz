using PC.Quiz.Infrastructure.Data.DbContext;
using PC.Quiz.Application;
using PC.Quiz.Infrastructure;
using PC.Quiz.Server.Filters;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(
    options => options.Filters.Add<BadRequestExceptionFilter>()
);
builder.Services.ConfigureApplication();
builder.Services.ConfigureInfrastructure();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<QuizContext>();
    await context.Database.EnsureCreatedAsync();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

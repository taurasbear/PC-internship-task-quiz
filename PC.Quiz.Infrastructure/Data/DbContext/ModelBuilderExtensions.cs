namespace PC.Quiz.Infrastructure.Data.DbContext
{
    using Microsoft.EntityFrameworkCore;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Domain.Enums;

    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Question>().HasData(
                new Question { Id = 1, Points = 100, Type = QuestionType.single },
                new Question { Id = 2, Points = 200, Type = QuestionType.multiple },
                new Question { Id = 3, Points = 500, Type = QuestionType.text },
                new Question { Id = 4, Points = 150, Type = QuestionType.single }
            );
        }
    }
}

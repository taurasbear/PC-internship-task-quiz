namespace PC.Quiz.Infrastructure.Data.DbContext
{
    using Microsoft.EntityFrameworkCore;
    using PC.Quiz.Domain.Constants;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Domain.Enums;

    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Question>().HasData(
                new Question { Id = 1, Title = "What is the biggest type of bear?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Single },
                new Question { Id = 2, Title = "Where do bears live?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Multiple },
                new Question { Id = 3, Title = "What was the name of the bear who served in the Polish military?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Text },
                new Question { Id = 4, Title = "From how far away can a bear smell food?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Single },
                new Question { Id = 5, Title = "What is a bear's favourite colour?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Text },
                new Question { Id = 6, Title = "How many years do bears live?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Text },
                new Question { Id = 7, Title = "How many species of bear are there?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Single },
                new Question { Id = 8, Title = "How much does a bear weigh?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Multiple },
                new Question { Id = 9, Title = "Are bears cute?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Text },
                new Question { Id = 10, Title = "What is a bear's favourite food?", Points = EntityConstants.PointsPerQuestion, Type = QuestionType.Single }
            );

            modelBuilder.Entity<AnswerOption>().HasData(
                // Question 1
                new AnswerOption { Id = 1, DisplayValue = "Polar bear", NormalizedValue = "POLAR BEAR", Correct = true, QuestionId = 1 },
                new AnswerOption { Id = 2, DisplayValue = "Brown bear", NormalizedValue = "BROWN BEAR", Correct = false, QuestionId = 1 },
                new AnswerOption { Id = 3, DisplayValue = "Black bear", NormalizedValue = "BLACK BEAR", Correct = false, QuestionId = 1 },
                new AnswerOption { Id = 4, DisplayValue = "Panda bear", NormalizedValue = "PANDA BEAR", Correct = false, QuestionId = 1 },

                // Question 2
                new AnswerOption { Id = 5, DisplayValue = "Forests", NormalizedValue = "FORESTS", Correct = true, QuestionId = 2 },
                new AnswerOption { Id = 6, DisplayValue = "The moon", NormalizedValue = "THE MOON", Correct = false, QuestionId = 2 },
                new AnswerOption { Id = 7, DisplayValue = "In the city", NormalizedValue = "IN THE CITY", Correct = false, QuestionId = 2 },
                new AnswerOption { Id = 8, DisplayValue = "The Artic", NormalizedValue = "THE ARTIC", Correct = true, QuestionId = 2 },

                // Question 3
                new AnswerOption { Id = 9, DisplayValue = "Wojtek", NormalizedValue = "WOJTEK", Correct = true, QuestionId = 3 },

                // Question 4
                new AnswerOption { Id = 10, DisplayValue = "16 km", NormalizedValue = "16 KM", Correct = false, QuestionId = 4 },
                new AnswerOption { Id = 11, DisplayValue = "2 km", NormalizedValue = "16 KM", Correct = false, QuestionId = 4 },
                new AnswerOption { Id = 12, DisplayValue = "9 km", NormalizedValue = "16 KM", Correct = false, QuestionId = 4 },
                new AnswerOption { Id = 13, DisplayValue = "32 km", NormalizedValue = "32 KM", Correct = true, QuestionId = 4 },

                // Question 5
                new AnswerOption { Id = 14, DisplayValue = "Yellow", NormalizedValue = "YELLOW", Correct = true, QuestionId = 5 },

                // Question 6
                new AnswerOption { Id = 15, DisplayValue = "25", NormalizedValue = "25", Correct = true, QuestionId = 6 },

                // Question 7
                new AnswerOption { Id = 16, DisplayValue = "12", NormalizedValue = "12", Correct = false, QuestionId = 7 },
                new AnswerOption { Id = 17, DisplayValue = "8", NormalizedValue = "8", Correct = true, QuestionId = 7 },
                new AnswerOption { Id = 18, DisplayValue = "25", NormalizedValue = "25", Correct = false, QuestionId = 7 },

                // Question 8
                new AnswerOption { Id = 19, DisplayValue = "Too much!", NormalizedValue = "TOOMUCH!", Correct = false, QuestionId = 8 },
                new AnswerOption { Id = 20, DisplayValue = "Not enough!", NormalizedValue = "NOTENOUGH!", Correct = false, QuestionId = 8 },
                new AnswerOption { Id = 21, DisplayValue = "Between 130 and 200 kg", NormalizedValue = "BETWEEN 130 AND 200 KG", Correct = true, QuestionId = 8 },

                // Question 9
                new AnswerOption { Id = 22, DisplayValue = "Yes", NormalizedValue = "YES", Correct = true, QuestionId = 9 },

                // Question 10
                new AnswerOption { Id = 23, DisplayValue = "Berries", NormalizedValue = "BERRIES", Correct = true, QuestionId = 10 },
                new AnswerOption { Id = 24, DisplayValue = "Human", NormalizedValue = "HUMAN", Correct = false, QuestionId = 10 },
                new AnswerOption { Id = 25, DisplayValue = "Fish and chips", NormalizedValue = "FISH AND CHIPS", Correct = false, QuestionId = 10 }
            );


            modelBuilder.Entity<Entry>().HasData(
                 new Entry { Id = 1, Email = "test@example.com", Status = EntryStatus.Ongoing, Score = 200 }
            );

            modelBuilder.Entity<EntryAnswer>().HasData(
                new EntryAnswer { Id = 1, QuestionId = 1, EntryId = 1, AnswerOptionId = 1 },

                new EntryAnswer { Id = 2, QuestionId = 2, EntryId = 1, AnswerOptionId = 1 },
                new EntryAnswer { Id = 3, QuestionId = 2, EntryId = 1, AnswerOptionId = 4 },

                new EntryAnswer { Id = 4, QuestionId = 3, EntryId = 1, NormalizedValue = "Wojtek" }
            );
        }
    }
}

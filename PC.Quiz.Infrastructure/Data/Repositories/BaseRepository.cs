namespace PC.Quiz.Infrastructure.Data.Repositories
{
    using PC.Quiz.Infrastructure.Data.DbContext;

    public abstract class BaseRepository
    {
        protected readonly QuizContext quizContext;

        protected BaseRepository(QuizContext quizContext)
        {
            this.quizContext = quizContext;
        }
    }
}

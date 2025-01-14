namespace PC.Quiz.Infrastructure.Data.Repositories
{
    using PC.Quiz.Application.Interfaces.Data.Repositories;
    using PC.Quiz.Infrastructure.Data.DbContext;

    public class AnswerOptionRepository : BaseRepository, IAnswerOptionRepository
    {
        public AnswerOptionRepository(QuizContext quizContext) : base(quizContext)
        { }
    }
}

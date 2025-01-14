namespace PC.Quiz.Infrastructure.Data.Repositories
{
    using PC.Quiz.Application.Interfaces.Data.Repositories;
    using PC.Quiz.Infrastructure.Data.DbContext;

    public class EntryAnswerRepository : BaseRepository, IEntryAnswerRepository
    {
        public EntryAnswerRepository(QuizContext quizContext) : base(quizContext)
        { }
    }
}

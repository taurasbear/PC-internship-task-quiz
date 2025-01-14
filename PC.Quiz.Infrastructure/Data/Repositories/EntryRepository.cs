namespace PC.Quiz.Infrastructure.Data.Repositories
{
    using PC.Quiz.Application.Interfaces.Data.Repositories;
    using PC.Quiz.Infrastructure.Data.DbContext;

    public class EntryRepository : BaseRepository, IEntryRepository
    {
        public EntryRepository(QuizContext quizContext) : base(quizContext)
        { }
    }
}

namespace PC.Quiz.Infrastructure.Data.Repositories
{
    using PC.Quiz.Application.Interfaces.Data.Repositories;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Infrastructure.Data.DbContext;
    using System.Threading;
    using System.Threading.Tasks;

    public class EntryAnswerRepository : BaseRepository, IEntryAnswerRepository
    {
        public EntryAnswerRepository(QuizContext quizContext) : base(quizContext)
        { }

        public async Task<EntryAnswer> AddEntryAnswerAsync(EntryAnswer entryAnswer, CancellationToken cancellationToken)
        {
            var addedEntryAnswer = await this.quizContext.EntryAnswers.AddAsync(entryAnswer, cancellationToken);
            return addedEntryAnswer.Entity;
        }

        public async Task<EntryAnswer> GetEntryAnswerByIdAsync(long entryAnswerId, CancellationToken cancellationToken)
        {
            return await this.quizContext.EntryAnswers.FindAsync(entryAnswerId, cancellationToken);
        }
    }
}

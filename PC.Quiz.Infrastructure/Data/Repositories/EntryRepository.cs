namespace PC.Quiz.Infrastructure.Data.Repositories
{
    using Microsoft.EntityFrameworkCore;
    using PC.Quiz.Application.Interfaces.Data.Repositories;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Infrastructure.Data.DbContext;
    using System.Threading;
    using System.Threading.Tasks;

    public class EntryRepository : BaseRepository, IEntryRepository
    {
        public EntryRepository(QuizContext quizContext) : base(quizContext)
        { }

        public async Task<Entry> AddEntryAsync(Entry entry, CancellationToken cancellationToken)
        {
            var trackedEntry = await this.quizContext.Entries.AddAsync(entry, cancellationToken);
            return trackedEntry.Entity;
        }

        public async Task<Entry> GetEntryByIdAsync(long entryId, CancellationToken cancellationToken)
        {
            return await this.quizContext.Entries.FindAsync(entryId, cancellationToken);
        }

        public async Task<Entry> GetEntryDetailsByIdAsync(long entryId, CancellationToken cancellationToken)
        {
            return await this.quizContext.Entries
                .Include(entry => entry.EntryAnswers)
                .FirstOrDefaultAsync(entry => entry.Id == entryId, cancellationToken);
        }
    }
}

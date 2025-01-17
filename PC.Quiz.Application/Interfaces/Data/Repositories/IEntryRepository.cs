namespace PC.Quiz.Application.Interfaces.Data.Repositories
{
    using PC.Quiz.Domain.Entities;

    public interface IEntryRepository
    {
        Task<Entry> GetEntryDetailsByIdAsync(long entryId, CancellationToken cancellationToken);

        Task<Entry> GetEntryByIdAsync(long entryId, CancellationToken cancellationToken);

        Task<Entry> AddEntryAsync(Entry entry, CancellationToken cancellationToken);
    }
}

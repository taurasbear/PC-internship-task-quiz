namespace PC.Quiz.Application.Interfaces.Data.Repositories
{
    using PC.Quiz.Domain.Entities;

    public interface IEntryAnswerRepository
    {
        //TODO: Add comment
        Task<EntryAnswer> AddEntryAnswerAsync(EntryAnswer entryAnswer, CancellationToken cancellationToken);

        Task<EntryAnswer> GetEntryAnswerByIdAsync(long entryAnswerId, CancellationToken cancellationToken);
    }
}

namespace PC.Quiz.Application.Interfaces.Data.Repositories
{
    using PC.Quiz.Domain.Entities;

    public interface IEntryAnswerRepository
    {
        /// <summary>
        /// Adds entry answer to context
        /// </summary>
        /// <param name="entryAnswer">Entry answer to add</param>
        /// <returns>The added entry answer</returns>
        Task<EntryAnswer> AddEntryAnswerAsync(EntryAnswer entryAnswer, CancellationToken cancellationToken);

        Task<EntryAnswer> GetEntryAnswerByIdAsync(long entryAnswerId, CancellationToken cancellationToken);

        void RemoveEntryAnswer(EntryAnswer entryAnswer);
    }
}

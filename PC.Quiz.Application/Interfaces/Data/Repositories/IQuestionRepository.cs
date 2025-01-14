namespace PC.Quiz.Application.Interfaces.Data.Repositories
{
    using PC.Quiz.Domain.Entities;

    public interface IQuestionRepository
    {
        /// <summary>
        /// Retrieves a Question with its EntryOptions and AnswerOptions by ID
        /// </summary>
        /// <param name="id">The ID of the question</param>
        /// <param name="cancellationToken">Cancellation token</param>
        /// <returns>A Question of the specified ID with its EntryOptions and AnswerOptions</returns>
        Task<Question> GetQuestionDetailsAsync(long id, CancellationToken cancellationToken);
    }
}

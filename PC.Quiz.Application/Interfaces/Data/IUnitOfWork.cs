namespace PC.Quiz.Application.Interfaces.Data
{
    using PC.Quiz.Application.Interfaces.Data.Repositories;

    public interface IUnitOfWork
    {
        public IAnswerOptionRepository AnswerOptionRepository { get; }

        public IEntryAnswerRepository EntryAnswerRepository { get; }

        public IEntryRepository EntryRepository { get; }

        public IQuestionRepository QuestionRepository { get; }

        public Task SaveAsync(CancellationToken cancellationToken);
    }
}

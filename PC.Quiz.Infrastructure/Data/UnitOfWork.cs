namespace PC.Quiz.Infrastructure.Data
{
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Application.Interfaces.Data.Repositories;
    using PC.Quiz.Infrastructure.Data.DbContext;
    using PC.Quiz.Infrastructure.Data.Repositories;
    using System;
    using System.Threading;
    using System.Threading.Tasks;

    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly QuizContext quizContext;

        private bool disposed;

        private IAnswerOptionRepository answerOptionRepository;

        private IEntryAnswerRepository entryAnswerRepository;

        private IEntryRepository entryRepository;

        private IQuestionRepository questionRepository;

        public UnitOfWork(QuizContext quizContext)
        {
            this.quizContext = quizContext;
        }

        public IAnswerOptionRepository AnswerOptionRepository
        {
            get
            {
                return answerOptionRepository ??= new AnswerOptionRepository(quizContext);
            }
        }

        public IEntryAnswerRepository EntryAnswerRepository
        {
            get
            {
                return entryAnswerRepository ??= new EntryAnswerRepository(quizContext);
            }
        }

        public IEntryRepository EntryRepository
        {
            get
            {
                return entryRepository ??= new EntryRepository(quizContext);
            }
        }

        public IQuestionRepository QuestionRepository
        {
            get
            {
                return questionRepository ??= new QuestionRepository(quizContext);
            }
        }

        private void Dispose(bool disposing)
        {
            if (!this.disposed && disposing)
            {
                quizContext.Dispose();
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public async Task SaveAsync(CancellationToken cancellationToken)
        {
            await this.quizContext.SaveChangesAsync(cancellationToken);
        }
    }
}

namespace PC.Quiz.Infrastructure.Data.Repositories
{
    using Microsoft.EntityFrameworkCore;
    using PC.Quiz.Application.Interfaces.Data.Repositories;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Infrastructure.Data.DbContext;
    using System.Threading;
    using System.Threading.Tasks;

    public class QuestionRepository : BaseRepository, IQuestionRepository
    {
        public QuestionRepository(QuizContext quizContext) : base(quizContext)
        { }

        public async Task<Question> GetQuestionByIdAsync(long questionId, CancellationToken cancellationToken)
        {
            return await this.quizContext.Questions.FindAsync(questionId, cancellationToken);
        }

        public async Task<int> GetQuestionCountAsync(CancellationToken cancellationToken)
        {
            return await this.quizContext.Questions.CountAsync(cancellationToken);
        }

        public async Task<Question> GetQuestionDetailsByIdAsync(long questionId, CancellationToken cancellationToken)
        {
            return await this.quizContext.Questions
                .Include(q => q.AnswerOptions)
                .Include(q => q.EntryAnswers)
                .FirstOrDefaultAsync(q => q.Id == questionId, cancellationToken);
        }
    }
}

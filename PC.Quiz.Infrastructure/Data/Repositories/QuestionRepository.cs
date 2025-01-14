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

        public async Task<Question> GetQuestionDetailsAsync(long id, CancellationToken cancellationToken)
        {
            return await this.quizContext.Questions.Include(q => q.AnswerOptions).FirstOrDefaultAsync(q => q.Id == id);
        }
    }
}

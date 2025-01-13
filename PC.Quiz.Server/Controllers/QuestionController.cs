namespace PC.Quiz.Server.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Infrastructure.Data.DbContext;

    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly QuizContext quizContext;

        public QuestionController(QuizContext quizContext)
        {
            this.quizContext = quizContext;
        }

        [HttpGet]
        public async Task<IList<Question>> GetAllQuestions()
        {
            return await quizContext.Questions.ToListAsync();
        }
    }
}

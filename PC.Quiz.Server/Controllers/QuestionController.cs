namespace PC.Quiz.Server.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails;

    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IMediator mediator;

        public QuestionController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("{questionId:long}")]
        public async Task<ActionResult<GetQuestionDetailsResponse>> GetAllQuestionDetails(long questionId, CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new GetQuestionDetailsRequest(questionId), cancellationToken);
            return this.Ok(response);
        }
    }
}

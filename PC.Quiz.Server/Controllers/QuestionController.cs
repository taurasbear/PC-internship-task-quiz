namespace PC.Quiz.Server.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using PC.Quiz.Application.Features.QuestionFeatures.GetPreviousQuestionId;
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

        [HttpGet]
        public async Task<ActionResult<GetQuestionDetailsResponse>> GetAllQuestionDetails(
            [FromQuery] long questionId,
            [FromQuery] long entryId,
            CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new GetQuestionDetailsRequest(questionId, entryId), cancellationToken);
            return this.Ok(response);
        }

        [HttpGet("previous/{previousQuestionId}")]
        public async Task<ActionResult<GetPreviousQuestionIdResponse>> GetPreviousQuestionId(
            long previousQuestionId,
            CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new GetPreviousQuestionIdRequest(previousQuestionId), cancellationToken);
            return this.Ok(response);
        }
    }
}

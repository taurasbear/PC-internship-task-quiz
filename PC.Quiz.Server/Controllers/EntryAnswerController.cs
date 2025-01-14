namespace PC.Quiz.Server.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswerSingle;

    [Route("api/[controller]")]
    [ApiController]
    public class EntryAnswerController : ControllerBase
    {
        private readonly IMediator mediator;

        public EntryAnswerController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<AddEntryAnswerSingleResponse>> AddEntryAnswerSingle(
            [FromQuery] long questionId,
            [FromQuery] long answerOptionId,
            [FromQuery] long? entryId,
            CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new AddEntryAnswerSingleRequest(questionId, answerOptionId, entryId), cancellationToken);
            return this.Ok(response);
        }
    }
}

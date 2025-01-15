namespace PC.Quiz.Server.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers;
    using System.Threading;

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
        public async Task<ActionResult<AddEntryAnswersResponse>> AddEntryAnswerSingle(
            [FromBody] IList<AddEntryAnswersRequest.EntryAnswerRequest> entryAnswers,
            CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new AddEntryAnswersRequest(entryAnswers), cancellationToken);
            return this.Ok(response);
        }
    }
}

namespace PC.Quiz.Server.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers;
    using PC.Quiz.Application.Features.EntryAnswerFeatures.UpdateEntryAnswers;
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
        public async Task<ActionResult<AddEntryAnswersResponse>> AddEntryAnswers(
            [FromBody] IList<AddEntryAnswersRequest.AddEntryAnswerRequest> entryAnswers,
            CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new AddEntryAnswersRequest(entryAnswers), cancellationToken);
            return this.Ok(response);
        }

        [HttpPut]
        public async Task<ActionResult<UpdateEntryAnswersResponse>> UpdateEntryAnswers(
            [FromBody] IList<UpdateEntryAnswersRequest.UpdateEntryAnswerRequest> entryAnswers,
            CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new UpdateEntryAnswersRequest(entryAnswers), cancellationToken);
            return this.Ok(response);
        }
    }
}

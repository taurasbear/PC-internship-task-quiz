namespace PC.Quiz.Server.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using PC.Quiz.Application.Features.EntryFeatures.CreateEntry;

    [Route("api/[controller]")]
    [ApiController]
    public class EntryController : ControllerBase
    {
        private readonly IMediator mediator;

        public EntryController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<CreateEntryResponse>> CreateEntry([FromQuery] string email, CancellationToken cancellationToken)
        {
            var response = await this.mediator.Send(new CreateEntryRequest(email), cancellationToken);
            return this.Ok(response);
        }
    }
}

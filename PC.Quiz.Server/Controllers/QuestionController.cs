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

        [HttpGet]
        public async Task<ActionResult<GetQuestionDetailsResponse>> GetAllQuestionDetails([FromQuery] long id)
        {
            var response = await this.mediator.Send(new GetQuestionDetailsRequest(id));
            return this.Ok(response);
        }
    }
}

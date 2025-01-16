namespace PC.Quiz.Application.Features.EntryAnswerFeatures.UpdateEntryAnswers
{
    using MediatR;

    public sealed record class UpdateEntryAnswersRequest(IList<UpdateEntryAnswersRequest.UpdateEntryAnswerRequest> entryAnswers) : IRequest<UpdateEntryAnswersResponse>
    {
        public sealed record class UpdateEntryAnswerRequest
        {
            public long Id { get; set; }

            public long QuestionId { get; set; }

            public long EntryId { get; set; }

            public string? NormalizedValue { get; set; }

            public long? AnswerOptionId { get; set; }
        }
    }
}

namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers
{
    using MediatR;

    public sealed record class AddEntryAnswersRequest(IList<AddEntryAnswersRequest.AddEntryAnswerRequest> entryAnswers) : IRequest<AddEntryAnswersResponse>
    {
        public sealed record class AddEntryAnswerRequest
        {
            public long QuestionId { get; set; }

            public long EntryId { get; set; }

            public string? NormalizedValue { get; set; }

            public long? AnswerOptionId { get; set; }
        }
    }
}

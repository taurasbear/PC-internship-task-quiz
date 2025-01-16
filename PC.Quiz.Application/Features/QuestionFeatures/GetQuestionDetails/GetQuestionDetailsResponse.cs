namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails
{
    public sealed record GetQuestionDetailsResponse
    {
        public long Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Type { get; set; } = string.Empty;

        public IList<AnswerOptionResponse> AnswerOptions { get; set; } = new List<AnswerOptionResponse>();

        public IList<EntryAnswerResponse> EntryAnswers { get; set; } = new List<EntryAnswerResponse>();

        public sealed record AnswerOptionResponse
        {
            public long Id { get; set; }

            public string DisplayValue { get; set; } = string.Empty;
        }

        public sealed record EntryAnswerResponse
        {
            public long Id { get; set; }

            public long QuestionId { get; set; }

            public long EntryId { get; set; }

            public string? NormalizedValue { get; set; }

            public long? AnswerOptionId { get; set; }
        }
    }
}

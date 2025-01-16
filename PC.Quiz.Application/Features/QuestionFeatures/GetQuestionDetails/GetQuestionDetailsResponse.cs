namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails
{
    public sealed record GetQuestionDetailsResponse
    {
        public long Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Type { get; set; } = string.Empty;

        public IList<AnswerOptionResponse> AnswerOptions { get; set; } = new List<AnswerOptionResponse>();

        public sealed record AnswerOptionResponse
        {
            public long Id { get; set; }

            public string DisplayValue { get; set; } = string.Empty;
        }
    }
}

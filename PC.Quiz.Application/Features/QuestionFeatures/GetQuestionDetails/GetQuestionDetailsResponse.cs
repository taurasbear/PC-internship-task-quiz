namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails
{
    using PC.Quiz.Domain.Enums;

    public sealed record GetQuestionDetailsResponse
    {
        public long Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public QuestionType Type { get; set; }

        public IList<AnswerOptionResponse> AnswerOptions { get; set; } = new List<AnswerOptionResponse>();

        public sealed record AnswerOptionResponse
        {
            public long Id { get; set; }

            public string DisplayValue { get; set; } = string.Empty;
        }
    }
}

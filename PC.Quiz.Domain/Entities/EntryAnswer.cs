namespace PC.Quiz.Domain.Entities
{
    public class EntryAnswer
    {
        public long Id { get; set; }

        public string NormalizedValue { get; set; } = string.Empty;

        public long QuestionId { get; set; }

        public Question Question { get; set; } = null!;

        public long EntryId { get; set; }

        public Entry Entry { get; set; } = null!;

        public long AnswerOptionId { get; set; }

        public AnswerOption AnswerOption { get; set; } = null!;
    }
}

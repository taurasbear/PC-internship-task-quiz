namespace PC.Quiz.Domain.Entities
{
    using System.Collections.ObjectModel;

    public class AnswerOption
    {
        public long Id { get; set; }

        public string DisplayValue { get; set; } = string.Empty;

        public string NormalizedValue { get; set; } = string.Empty;

        public bool Correct { get; set; }

        public long QuestionId { get; set; }

        public Question Question { get; set; } = null!;

        public ICollection<EntryAnswer> EntryAnswers { get; set; } = new Collection<EntryAnswer>();
    }
}

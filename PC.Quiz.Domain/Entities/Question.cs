namespace PC.Quiz.Domain.Entities
{
    using PC.Quiz.Domain.Enums;
    using System.Collections.ObjectModel;

    public class Question
    {
        public long Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public int Points { get; set; }

        public QuestionType Type { get; set; }

        public ICollection<EntryAnswer> EntryAnswers { get; set; } = new Collection<EntryAnswer>();

        public ICollection<AnswerOption> AnswerOptions { get; set; } = new Collection<AnswerOption>();
    }
}

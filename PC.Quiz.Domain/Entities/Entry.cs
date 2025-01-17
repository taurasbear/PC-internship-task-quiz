namespace PC.Quiz.Domain.Entities
{
    using PC.Quiz.Domain.Enums;
    using System.Collections.ObjectModel;

    public class Entry
    {
        public long Id { get; set; }

        public EntryStatus Status { get; set; }

        public int Score { get; set; }

        public string Email { get; set; } = string.Empty;

        public DateTime? FinishedDateTime { get; set; }

        public ICollection<EntryAnswer> EntryAnswers { get; set; } = new Collection<EntryAnswer>();
    }
}

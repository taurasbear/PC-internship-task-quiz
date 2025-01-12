namespace PC.Quiz.Domain.Entities
{
    using PC.Quiz.Domain.Enums;
    using System.Collections.ObjectModel;

    public class Entry
    {
        public long Id { get; set; }
        public EntryStatus Status { get; set; }

        public int Score { get; set; }

        public string Email { get; set; }

        public DateTime DateTime { get; set; }

        public ICollection<EntryAnswer> EntryAnswers { get; set; } = new Collection<EntryAnswer>();
    }
}

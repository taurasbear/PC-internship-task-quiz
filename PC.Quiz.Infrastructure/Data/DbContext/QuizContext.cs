namespace PC.Quiz.Infrastructure.Data.DbContext
{
    using Microsoft.EntityFrameworkCore;
    using PC.Quiz.Domain.Entities;

    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions options)
        : base(options) { }

        public DbSet<AnswerOption> AnswerOptions { get; set; }

        public DbSet<Entry> Entries { get; set; }

        public DbSet<EntryAnswer> EntryAnswers { get; set; }

        public DbSet<Question> Questions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("QuizDb");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EntryAnswer>()
                .HasOne(ea => ea.Entry)
                .WithMany(e => e.EntryAnswers)
                .HasForeignKey(ea => ea.EntryId);

            modelBuilder.Entity<EntryAnswer>()
                .HasOne(ea => ea.Question)
                .WithMany(q => q.EntryAnswers)
                .HasForeignKey(ea => ea.QuestionId);

            modelBuilder.Entity<EntryAnswer>()
                .HasOne(ea => ea.AnswerOption)
                .WithMany(ao => ao.EntryAnswers)
                .HasForeignKey(ea => ea.AnswerOptionId);

            modelBuilder.Entity<AnswerOption>()
                .HasOne(ao => ao.Question)
                .WithMany(q => q.AnswerOptions)
                .HasForeignKey(ao => ao.QuestionId);
        }
    }
}

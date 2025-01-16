namespace PC.Quiz.Application.Features.EntryFeatures.CreateEntry
{
    using FluentValidation;

    public class CreateEntryValidator : AbstractValidator<CreateEntryRequest>
    {
        public CreateEntryValidator()
        {
            this.RuleFor(entry => entry.email)
                .EmailAddress()
                .WithMessage("Invalid email address.");
        }
    }
}

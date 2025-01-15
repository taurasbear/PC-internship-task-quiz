namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers
{
    using FluentValidation;
    using PC.Quiz.Domain.Constants;

    public sealed class AddEntryAnswersValidator : AbstractValidator<AddEntryAnswersRequest>
    {
        public AddEntryAnswersValidator()
        {
            RuleFor(entryAnswers => entryAnswers.entryAnswers)
                .NotEmpty()
                .WithMessage("EntryAnswers list must not be empty.");

            RuleForEach(entryAnswers => entryAnswers.entryAnswers)
                .SetValidator(new EntryAnswerRequestValidator());

            RuleFor(entryAnswers => entryAnswers.entryAnswers)
                .Must(entryAnswers => entryAnswers.Select(ea => ea.QuestionId).Distinct().Count() == 1)
                .WithMessage("EntryAnswers cannot have distinct QuestionId.");

            RuleFor(entryAnswers => entryAnswers.entryAnswers)
                .Must(entryAnswers => entryAnswers.Select(ea => ea.EntryId).Distinct().Count() == 1)
                .WithMessage("EntryAnswers cannot have distinct EntryId.");
        }
    }

    public sealed class EntryAnswerRequestValidator : AbstractValidator<AddEntryAnswersRequest.EntryAnswerRequest>
    {
        public EntryAnswerRequestValidator()
        {
            RuleFor(entryAnswer => entryAnswer.QuestionId)
                .GreaterThanOrEqualTo(ValidationConstants.MinId)
                .WithMessage($"QuestionId must greater than or equal to {ValidationConstants.MinId}.");

            RuleFor(entryAnswer => entryAnswer.EntryId)
                .GreaterThanOrEqualTo(ValidationConstants.MinId)
                .WithMessage($"EntryId must greater than or equal to {ValidationConstants.MinId}.");

            RuleFor(entryAnswer => entryAnswer.NormalizedValue)
                .Must(value => value == null || !string.IsNullOrWhiteSpace(value))
                .WithMessage("NormalizedValue must be null or a non-empty string.");

            RuleFor(entryAnswer => entryAnswer.AnswerOptionId)
                .GreaterThanOrEqualTo(ValidationConstants.MinId)
                .When(entryAnswer => entryAnswer.AnswerOptionId.HasValue)
                .WithMessage($"AnswerOptionId great than or equal to {ValidationConstants.MinId} if provided.");

            RuleFor(entryAnswer => entryAnswer)
                .Must(entryAnswer => !string.IsNullOrWhiteSpace(entryAnswer.NormalizedValue) || entryAnswer.AnswerOptionId.HasValue)
                .WithMessage("Either NormalizedValue or AnswerOptionId must be provided.");
        }
    }
}

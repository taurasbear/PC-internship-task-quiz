namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswerSingle
{
    using MediatR;

    public sealed record class AddEntryAnswerSingleRequest(long questionId, long answerOptionId, long? entryId) : IRequest<AddEntryAnswerSingleResponse>;
}

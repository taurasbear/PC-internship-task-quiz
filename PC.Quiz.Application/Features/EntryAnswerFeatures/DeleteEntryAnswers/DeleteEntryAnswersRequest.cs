namespace PC.Quiz.Application.Features.EntryAnswerFeatures.DeleteEntryAnswers
{
    using MediatR;

    public sealed record class DeleteEntryAnswersRequest(IList<long> entryAnswerIdList) : IRequest;
}

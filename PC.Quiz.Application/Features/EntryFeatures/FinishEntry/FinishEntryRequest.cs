namespace PC.Quiz.Application.Features.EntryFeatures.FinishEntry
{
    using MediatR;

    public sealed record class FinishEntryRequest(long entryId) : IRequest;
}

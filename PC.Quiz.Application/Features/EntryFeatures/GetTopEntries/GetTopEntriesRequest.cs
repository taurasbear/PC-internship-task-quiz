namespace PC.Quiz.Application.Features.EntryFeatures.GetTopEntries
{
    using MediatR;

    public sealed record class GetTopEntriesRequest() : IRequest<GetTopEntriesResponse>;
}

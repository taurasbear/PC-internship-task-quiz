namespace PC.Quiz.Application.Features.EntryFeatures.CreateEntry
{
    using MediatR;

    public sealed record class CreateEntryRequest(string email) : IRequest<CreateEntryResponse>;
}

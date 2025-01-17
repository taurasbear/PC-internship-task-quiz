namespace PC.Quiz.Application.Features.EntryFeatures.GetTopEntries
{
    public sealed record GetTopEntriesResponse
    {
        public IList<GetTopEntryResponse> TopEntries { get; set; }

        public sealed record GetTopEntryResponse
        {
            public string Id { get; set; }

            public string Email { get; set; } = string.Empty;

            public string Score { get; set; } = string.Empty;

            public DateTime FinishedDatetime { get; set; }
        }
    }
}

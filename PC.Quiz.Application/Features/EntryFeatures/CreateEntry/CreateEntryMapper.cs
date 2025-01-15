namespace PC.Quiz.Application.Features.EntryFeatures.CreateEntry
{
    using AutoMapper;
    using PC.Quiz.Domain.Entities;

    public class CreateEntryMapper : Profile
    {
        public CreateEntryMapper()
        {
            this.CreateMap<Entry, CreateEntryResponse>();
        }
    }
}

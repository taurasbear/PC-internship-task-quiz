namespace PC.Quiz.Application.Features.EntryFeatures.CreateEntry
{
    using AutoMapper;
    using PC.Quiz.Domain.Entities;

    public class CreateEntryMapper : Profile
    {
        public CreateEntryMapper()
        {
            this.CreateMap<Entry, CreateEntryResponse>()
                .ForMember(dest => dest.EntryId, opt => opt.MapFrom(src => src.Id));
        }
    }
}

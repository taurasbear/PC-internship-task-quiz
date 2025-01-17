namespace PC.Quiz.Application.Features.EntryFeatures.GetTopEntries
{
    using AutoMapper;
    using PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers;
    using PC.Quiz.Domain.Entities;

    public class GetTopEntriesMapper : Profile
    {
        public GetTopEntriesMapper()
        {
            this.CreateMap<Entry, GetTopEntriesResponse.GetTopEntryResponse>();
            this.CreateMap<List<Entry>, GetTopEntriesResponse>()
                .ForMember(dest => dest.TopEntries, opt => opt.MapFrom(src => src));
        }
    }
}

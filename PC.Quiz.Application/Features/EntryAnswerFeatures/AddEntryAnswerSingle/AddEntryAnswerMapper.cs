namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswerSingle
{
    using AutoMapper;
    using PC.Quiz.Domain.Entities;

    public class AddEntryAnswerMapper : Profile
    {
        public AddEntryAnswerMapper()
        {
            this.CreateMap<AddEntryAnswerSingleRequest, EntryAnswer>();
            this.CreateMap<EntryAnswer, AddEntryAnswerSingleResponse>();
        }
    }
}

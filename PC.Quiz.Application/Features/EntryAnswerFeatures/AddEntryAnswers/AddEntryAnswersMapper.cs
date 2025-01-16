namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers
{
    using AutoMapper;
    using PC.Quiz.Domain.Entities;

    public class AddEntryAnswersMapper : Profile
    {
        public AddEntryAnswersMapper()
        {
            this.CreateMap<AddEntryAnswersRequest.AddEntryAnswerRequest, EntryAnswer>();
            this.CreateMap<AddEntryAnswersRequest, List<EntryAnswer>>()
                .ConvertUsing((src, dest, context) => context.Mapper.Map<List<EntryAnswer>>(src.entryAnswers));
        }
    }
}

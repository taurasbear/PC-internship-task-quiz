using AutoMapper;
using PC.Quiz.Domain.Entities;

namespace PC.Quiz.Application.Features.EntryAnswerFeatures.UpdateEntryAnswers
{
    public class UpdateEntryAnswersMapper : Profile
    {
        public UpdateEntryAnswersMapper()
        {
            this.CreateMap<UpdateEntryAnswersRequest.UpdateEntryAnswerRequest, EntryAnswer>();
            this.CreateMap<UpdateEntryAnswersRequest, List<EntryAnswer>>()
                .ConvertUsing((src, dest, context) => context.Mapper.Map<List<EntryAnswer>>(src.entryAnswers));
        }
    }
}

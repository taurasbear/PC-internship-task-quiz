namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers
{
    using AutoMapper;
    using PC.Quiz.Domain.Entities;

    public class AddEntryAnswersMapper : Profile
    {
        public AddEntryAnswersMapper()
        {
            this.CreateMap<AddEntryAnswersRequest.EntryAnswerRequest, EntryAnswer>();
        }
    }
}

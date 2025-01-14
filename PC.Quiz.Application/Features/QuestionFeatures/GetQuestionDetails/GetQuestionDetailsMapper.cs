namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails
{
    using AutoMapper;
    using PC.Quiz.Domain.Entities;

    public class GetQuestionDetailsMapper : Profile
    {
        public GetQuestionDetailsMapper()
        {
            this.CreateMap<Question, GetQuestionDetailsResponse>();
            this.CreateMap<AnswerOption, GetQuestionDetailsResponse.AnswerOptionResponse>();
        }
    }
}

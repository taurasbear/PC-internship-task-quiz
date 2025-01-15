namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails
{
    using AutoMapper;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Entities;

    public class GetQuestionDetailsHandler : BaseHandler<GetQuestionDetailsRequest, GetQuestionDetailsResponse>
    {
        public GetQuestionDetailsHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork) { }

        public override async Task<GetQuestionDetailsResponse> Handle(GetQuestionDetailsRequest request, CancellationToken cancellationToken)
        {
            //TODO: include EntryAnswers in response
            Question question = await this.unitOfWork.QuestionRepository.GetQuestionDetailsByIdAsync(request.questionId, cancellationToken);

            return this.mapper.Map<GetQuestionDetailsResponse>(question);
        }
    }
}

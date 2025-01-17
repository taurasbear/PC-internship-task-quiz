namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails
{
    using AutoMapper;
    using PC.Quiz.Application.Common.Exceptions;
    using PC.Quiz.Application.Interfaces.Data;

    public class GetQuestionDetailsHandler : BaseHandler<GetQuestionDetailsRequest, GetQuestionDetailsResponse>
    {
        public GetQuestionDetailsHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork) { }

        public override async Task<GetQuestionDetailsResponse> Handle(GetQuestionDetailsRequest request, CancellationToken cancellationToken)
        {
            var questionDetails = await this.unitOfWork.QuestionRepository
                .GetQuestionDetailsByIdAsync(request.questionId, cancellationToken);

            if (questionDetails == null)
            {
                throw new BadRequestException($"Question with Id: {request.questionId} does not exist.");
            }

            var response = this.mapper.Map<GetQuestionDetailsResponse>(questionDetails);
            response.EntryAnswers = response.EntryAnswers
                .Where(entryAnswer => entryAnswer.EntryId == request.entryId)
                .ToList();

            return response;
        }
    }
}

namespace PC.Quiz.Application.Features.QuestionFeatures.GetPreviousQuestionId
{
    using AutoMapper;
    using PC.Quiz.Application.Common.Exceptions;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Constants;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetPreviousQuestionIdHandler : BaseHandler<GetPreviousQuestionIdRequest, GetPreviousQuestionIdResponse>
    {
        public GetPreviousQuestionIdHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        { }

        public override async Task<GetPreviousQuestionIdResponse> Handle(GetPreviousQuestionIdRequest request, CancellationToken cancellationToken)
        {
            var question = await this.unitOfWork.QuestionRepository
                .GetQuestionByIdAsync(request.questionId, cancellationToken);

            if (question == null)
            {
                throw new BadRequestException($"Question with ID: {request.questionId} does not exist.");
            }

            var previousQuestionId = question.Id - EntityConstants.DifferenceBetweenQuestionIds;
            return new GetPreviousQuestionIdResponse { PreviousQuestionId = previousQuestionId };
        }
    }
}

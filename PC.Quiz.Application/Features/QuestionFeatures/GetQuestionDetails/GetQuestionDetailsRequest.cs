namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionDetails
{
    using MediatR;

    public sealed record class GetQuestionDetailsRequest(long questionId) : IRequest<GetQuestionDetailsResponse>;
}

namespace PC.Quiz.Application.Features.QuestionFeatures.GetPreviousQuestionId
{
    using MediatR;

    public sealed record class GetPreviousQuestionIdRequest(long questionId) : IRequest<GetPreviousQuestionIdResponse>;
}

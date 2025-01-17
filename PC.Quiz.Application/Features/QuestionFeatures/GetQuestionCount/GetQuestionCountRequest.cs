namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionCount
{
    using MediatR;

    public sealed record class GetQuestionCountRequest() : IRequest<GetQuestionCountResponse>;
}

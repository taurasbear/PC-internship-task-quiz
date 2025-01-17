namespace PC.Quiz.Application.Features.QuestionFeatures.GetQuestionCount
{
    using AutoMapper;
    using PC.Quiz.Application.Interfaces.Data;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetQuestionCountHandler : BaseHandler<GetQuestionCountRequest, GetQuestionCountResponse>
    {
        public GetQuestionCountHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        { }

        public override async Task<GetQuestionCountResponse> Handle(GetQuestionCountRequest request, CancellationToken cancellationToken)
        {
            int questionCount = await this.unitOfWork.QuestionRepository.GetQuestionCountAsync(cancellationToken);
            return new GetQuestionCountResponse { QuestionCount = questionCount };
        }
    }
}

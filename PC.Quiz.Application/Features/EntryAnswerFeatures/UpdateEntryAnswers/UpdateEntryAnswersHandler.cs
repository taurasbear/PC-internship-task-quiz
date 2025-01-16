namespace PC.Quiz.Application.Features.EntryAnswerFeatures.UpdateEntryAnswers
{
    using AutoMapper;
    using PC.Quiz.Application.Common.Exceptions;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Constants;
    using PC.Quiz.Domain.Entities;
    using System.Threading;
    using System.Threading.Tasks;

    public class UpdateEntryAnswersHandler : BaseHandler<UpdateEntryAnswersRequest, UpdateEntryAnswersResponse>
    {
        public UpdateEntryAnswersHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        { }

        public override async Task<UpdateEntryAnswersResponse> Handle(UpdateEntryAnswersRequest request, CancellationToken cancellationToken)
        {
            List<EntryAnswer> entryAnswerList = this.mapper.Map<List<EntryAnswer>>(request);
            foreach (EntryAnswer entryAnswer in entryAnswerList)
            {
                var trackedEntryAnswer = await this.unitOfWork.EntryAnswerRepository
                    .GetEntryAnswerByIdAsync(entryAnswer.Id, cancellationToken);
                if (trackedEntryAnswer != null)
                {
                    trackedEntryAnswer = entryAnswer;
                }
                else
                {
                    throw new BadRequestException($"EntryAnswer with Id: {entryAnswer.Id} does not exist.");
                }
            }

            await this.unitOfWork.SaveAsync(cancellationToken);

            long nextQuestionId = entryAnswerList.FirstOrDefault().QuestionId + EntityConstants.DifferenceBetweenQuestionIds;
            return new UpdateEntryAnswersResponse { NextQuestionId = nextQuestionId };
        }
    }
}

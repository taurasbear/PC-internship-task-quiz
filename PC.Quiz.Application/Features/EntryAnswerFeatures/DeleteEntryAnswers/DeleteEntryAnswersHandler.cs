namespace PC.Quiz.Application.Features.EntryAnswerFeatures.DeleteEntryAnswers
{
    using MediatR;
    using PC.Quiz.Application.Interfaces.Data;
    using System.Threading;
    using System.Threading.Tasks;

    public class DeleteEntryAnswersHandler : IRequestHandler<DeleteEntryAnswersRequest>
    {
        private readonly IUnitOfWork unitOfWork;

        public DeleteEntryAnswersHandler(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task Handle(DeleteEntryAnswersRequest request, CancellationToken cancellationToken)
        {
            foreach (long entryAnswerId in request.entryAnswerIdList)
            {
                var entryAnswer = await this.unitOfWork.EntryAnswerRepository
                    .GetEntryAnswerByIdAsync(entryAnswerId, cancellationToken);

                if (entryAnswer != null)
                {
                    this.unitOfWork.EntryAnswerRepository.RemoveEntryAnswer(entryAnswer);
                }
            }

            await this.unitOfWork.SaveAsync(cancellationToken);
        }
    }
}

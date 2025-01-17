namespace PC.Quiz.Application.Features.EntryFeatures.FinishEntry
{
    using MediatR;
    using PC.Quiz.Application.Common.Exceptions;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Domain.Enums;
    using System.Threading;
    using System.Threading.Tasks;

    public class FinishEntryHandler : IRequestHandler<FinishEntryRequest>
    {
        private readonly IUnitOfWork unitOfWork;

        public FinishEntryHandler(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task Handle(FinishEntryRequest request, CancellationToken cancellationToken)
        {
            var trackedEntry = await this.unitOfWork.EntryRepository.GetEntryByIdAsync(request.entryId, cancellationToken);

            if (trackedEntry == null)
            {
                throw new BadRequestException($"Entry with Id: {request.entryId} does not exist.");
            }

            trackedEntry.Status = EntryStatus.Finished;

            await this.unitOfWork.SaveAsync(cancellationToken);
        }
    }
}

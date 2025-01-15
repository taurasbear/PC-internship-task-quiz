namespace PC.Quiz.Application.Features.EntryFeatures.CreateEntry
{
    using AutoMapper;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Entities;
    using System.Threading;
    using System.Threading.Tasks;

    public class CreateEntryHandler : BaseHandler<CreateEntryRequest, CreateEntryResponse>
    {
        public CreateEntryHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        { }

        public override async Task<CreateEntryResponse> Handle(CreateEntryRequest request, CancellationToken cancellationToken)
        {
            Entry entry = new Entry { Email = request.email };
            Entry trackedEntry = await this.unitOfWork.EntryRepository.AddEntryAsync(entry, cancellationToken);
            await this.unitOfWork.SaveAsync(cancellationToken);

            return this.mapper.Map<CreateEntryResponse>(trackedEntry);
        }
    }
}

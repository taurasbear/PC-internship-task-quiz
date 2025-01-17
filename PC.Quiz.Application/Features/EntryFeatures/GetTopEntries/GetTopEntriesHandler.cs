namespace PC.Quiz.Application.Features.EntryFeatures.GetTopEntries
{
    using AutoMapper;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Constants;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetTopEntriesHandler : BaseHandler<GetTopEntriesRequest, GetTopEntriesResponse>
    {
        public GetTopEntriesHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        { }

        public override async Task<GetTopEntriesResponse> Handle(GetTopEntriesRequest request, CancellationToken cancellationToken)
        {
            var topEntries = await this.unitOfWork.EntryRepository
                .GetTopEntriesAsync(EntityConstants.TopEntryCount, cancellationToken);

            return this.mapper.Map<GetTopEntriesResponse>(topEntries);
        }
    }
}

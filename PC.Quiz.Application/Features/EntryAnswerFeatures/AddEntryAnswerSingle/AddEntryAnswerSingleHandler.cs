namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswerSingle
{
    using AutoMapper;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Entities;
    using System.Threading;
    using System.Threading.Tasks;

    public class AddEntryAnswerSingleHandler : BaseHandler<AddEntryAnswerSingleRequest, AddEntryAnswerSingleResponse>
    {
        public AddEntryAnswerSingleHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        { }

        public override async Task<AddEntryAnswerSingleResponse> Handle(AddEntryAnswerSingleRequest request, CancellationToken cancellationToken)
        {

            EntryAnswer entryAnswer = this.mapper.Map<EntryAnswer>(request);

            if (entryAnswer.EntryId == 0)
            {
                entryAnswer.Entry = new Entry
                {
                    Status = Domain.Enums.EntryStatus.Ongoing,
                    //TODO: Add calculation logic
                    Score = 0,
                    //TODO: Add email Email,
                };
            }
            EntryAnswer trackedEntryAnswer = await this.unitOfWork.EntryAnswerRepository.AddEntryAnswerAsync(entryAnswer, cancellationToken);

            await this.unitOfWork.SaveAsync(cancellationToken);
            return this.mapper.Map<AddEntryAnswerSingleResponse>(trackedEntryAnswer);
        }
    }
}

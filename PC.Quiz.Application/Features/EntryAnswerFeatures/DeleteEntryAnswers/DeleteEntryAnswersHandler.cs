namespace PC.Quiz.Application.Features.EntryAnswerFeatures.DeleteEntryAnswers
{
    using MediatR;
    using PC.Quiz.Application.Common.Exceptions;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Domain.Enums;
    using PC.Quiz.Domain.Services;
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
            List<EntryAnswer> entryAnswerList = new List<EntryAnswer>();
            foreach (long entryAnswerId in request.entryAnswerIdList)
            {
                var entryAnswer = await this.unitOfWork.EntryAnswerRepository
                    .GetEntryAnswerByIdAsync(entryAnswerId, cancellationToken);

                if (entryAnswer == null)
                {
                    throw new BadRequestException($"EntryAnswer with Id {entryAnswerId} does not exist.");
                }

                entryAnswerList.Add(entryAnswer);
            }

            this.UpdateEntryScore(entryAnswerList, cancellationToken);

            await this.unitOfWork.SaveAsync(cancellationToken);
        }

        private async Task UpdateEntryScore(List<EntryAnswer> entryAnswerList, CancellationToken cancellationToken)
        {
            EntryAnswer firstEntryAnswer = entryAnswerList.FirstOrDefault();
            Entry entry = await this.unitOfWork.EntryRepository.GetEntryByIdAsync(firstEntryAnswer.EntryId, cancellationToken);
            Question question = await this.unitOfWork.QuestionRepository.GetQuestionDetailsByIdAsync(firstEntryAnswer.QuestionId, cancellationToken);

            QuestionType questionType = question.Type;
            switch (questionType)
            {
                case QuestionType.Single:
                    entry.Score -= QuestionPointsCalculator.CalculateSingleType(question, firstEntryAnswer);
                    break;
                case QuestionType.Multiple:
                    entry.Score -= QuestionPointsCalculator.CalculateMultipleType(question, entryAnswerList);
                    break;
                case QuestionType.Text:
                    entry.Score -= QuestionPointsCalculator.CalculateTextType(question, firstEntryAnswer);
                    break;
                default:
                    throw new BadRequestException("QuestionType does not exist.");
            }
        }
    }
}

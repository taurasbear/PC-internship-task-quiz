namespace PC.Quiz.Application.Features.EntryAnswerFeatures.AddEntryAnswers
{
    using AutoMapper;
    using PC.Quiz.Application.Common.Exceptions;
    using PC.Quiz.Application.Interfaces.Data;
    using PC.Quiz.Domain.Constants;
    using PC.Quiz.Domain.Entities;
    using PC.Quiz.Domain.Enums;
    using PC.Quiz.Domain.Services;
    using System.Threading;
    using System.Threading.Tasks;

    public class AddEntryAnswersHandler : BaseHandler<AddEntryAnswersRequest, AddEntryAnswersResponse>
    {
        public AddEntryAnswersHandler(IMapper mapper, IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        { }

        public override async Task<AddEntryAnswersResponse> Handle(AddEntryAnswersRequest request, CancellationToken cancellationToken)
        {
            List<EntryAnswer> entryAnswerList = this.mapper.Map<List<EntryAnswer>>(request);
            EntryAnswer firstEntryAnswer = entryAnswerList.FirstOrDefault()!;

            Entry entry = await this.unitOfWork.EntryRepository.GetEntryDetailsByIdAsync(firstEntryAnswer.EntryId, cancellationToken);
            Question question = await this.unitOfWork.QuestionRepository.GetQuestionDetailsByIdAsync(firstEntryAnswer.QuestionId, cancellationToken);

            QuestionType questionType = question.Type;
            switch (questionType)
            {
                case QuestionType.Single:
                    entry.Score += QuestionPointsCalculator.CalculateSingleType(question, firstEntryAnswer);
                    break;
                case QuestionType.Multiple:
                    entry.Score += QuestionPointsCalculator.CalculateMultipleType(question, entryAnswerList);
                    break;
                case QuestionType.Text:
                    entry.Score += QuestionPointsCalculator.CalculateTextType(question, firstEntryAnswer);
                    break;
                default:
                    throw new BadRequestException("QuestionType does not exist.");
            }

            foreach (EntryAnswer entryAnswer in entryAnswerList)
            {
                entry.EntryAnswers.Add(entryAnswer);
            }

            await this.unitOfWork.SaveAsync(cancellationToken);
            return new AddEntryAnswersResponse { NextQuestionId = question.Id + EntityConstants.DifferenceBetweenQuestionIds };
        }
    }
}

namespace PC.Quiz.Domain.Services
{
    using PC.Quiz.Domain.Entities;

    public static class QuestionPointsCalculator
    {
        public static int CalculateSingleType(Question question, EntryAnswer entryAnswer)
        {
            if (question.AnswerOptions.FirstOrDefault(q => q.Id == entryAnswer.AnswerOptionId).Correct)
            {
                return question.Points;
            }

            return 0;
        }

        public static int CalculateMultipleType(Question question, IList<EntryAnswer> entryAnswerList)
        {
            List<long> correctAnswerOptionIds = question.AnswerOptions
                .Where(ao => ao.Correct)
                .Select(ao => ao.Id)
                .ToList();

            int correctEntryAnswerCount = 0;
            foreach (EntryAnswer entryAnswer in entryAnswerList)
            {
                if (correctAnswerOptionIds.Contains(entryAnswer.AnswerOptionId))
                {
                    correctEntryAnswerCount++;
                }
            }

            decimal pointsPerQuestion = (decimal)question.Points / correctAnswerOptionIds.Count;
            decimal totalPoints = pointsPerQuestion * correctEntryAnswerCount;

            return (int)Math.Round(totalPoints, MidpointRounding.AwayFromZero);
        }

        public static int CalculateTextType(Question question, EntryAnswer entryAnswer)
        {
            List<string> correctNormalizedValues = question.AnswerOptions
                .Where(ao => ao.Correct)
                .Select(ao => ao.NormalizedValue)
                .ToList();

            if (correctNormalizedValues.Contains(entryAnswer.NormalizedValue.ToUpper()))
            {
                return question.Points;
            }

            return 0;
        }
    }
}

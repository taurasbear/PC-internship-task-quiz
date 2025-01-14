import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useQuestion } from '../utils/queries/QuestionQueries';
import { useQuiz } from '../utils/QuizContext';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import { EntryAnswer } from '../shared/types/entities/EntryAnswer';
import { handleQuestionType } from '../shared/utils/handleQuestionType';
import { useAddEntryAnswerSingle } from '../utils/queries/EntryAnswerQueries';
import { QuestionType } from '../shared/types/enums/QuestionType';

const Quiz = () => {
    const { currentQuestionId, setCurrentQuestionId } = useQuiz();

    const { data: question, isLoading, error } = useQuestion(currentQuestionId);
    const addEntryAnswerSingle = useAddEntryAnswerSingle();

    console.log("Quiz> question: ", question);

    const handleAnswerSubmit = async (entryAnswers: EntryAnswer[]) => {
        try {
            const entryAnswer: EntryAnswer = entryAnswers[0];
            switch (question?.type) {
                case QuestionType.Single:
                    addEntryAnswerSingle.mutateAsync({
                        questionId: entryAnswer.questionId,
                        answerOptionId: Number(entryAnswer.answerOptionId),
                        entryId: entryAnswer.questionId
                    });
                    break;
                case QuestionType.Multiple:
                    console.log('Quiz> multiple hasnt been implemented yet')
                    break;
                case QuestionType.Text:
                    console.log('Quiz> text hasnt been implemented yet')
                    break;
                default:
                    throw new Error(`Unsupported question type: ${question?.type}`);
            }
        } catch (error) {
            console.error("Quiz> Error on handleAnswerSubmit:", error);
        }
    }

    return (
        <Box sx={{ maxWidth: 1000, margin: '0 auto' }}>
            <Typography variant='h2' gutterBottom>
                Welcome! This is the quiz taking page.
            </Typography>

            <Typography variant='h2' gutterBottom>
                Current QuestionId = {currentQuestionId}
            </Typography>

            {isLoading && <Typography variant='h3' gutterBottom>
                Loading
            </Typography>}

            {error?.message && <Typography variant='h3' gutterBottom>
                {error?.message}
            </Typography>}

            {question && <Box>
                {question.answerOptions.map((answerOption) => (
                    <Typography key={answerOption.id} variant='h3'>
                        {answerOption.displayValue}
                    </Typography>
                ))}
            </Box>}

            {question && <QuizQuestion question={question} onAnswerSubmit={handleAnswerSubmit} />}

        </Box>
    );
}

export default Quiz;
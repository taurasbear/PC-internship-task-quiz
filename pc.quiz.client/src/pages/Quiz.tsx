import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useQuestion } from '../utils/queries/QuestionQueries';
import { useQuiz } from '../utils/QuizContext';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import { EntryAnswer } from '../shared/types/entities/EntryAnswer';
import { useAddEntryAnswers } from '../utils/queries/EntryAnswerQueries';

const Quiz = () => {
    const { currentQuestionId, setCurrentQuestionId } = useQuiz();
    const { data: question, isLoading, error } = useQuestion(currentQuestionId);
    const addEntryAnswers = useAddEntryAnswers();

    const handleAnswerSubmit = async (entryAnswers: EntryAnswer[]) => {
        try {
            const nextQuestionId = await addEntryAnswers.mutateAsync({ entryAnswers });
            setCurrentQuestionId(nextQuestionId);
        } catch (error) {
            console.error("Quiz> Error on handleAnswerSubmit:", error);
        }
    }

    return (
        <Box sx={{ maxWidth: 1000, margin: '0 auto', flexDirection: 'column', justifyContent: 'center' }}>
            {isLoading && <Typography variant='h3' gutterBottom align='center'>
                Loading...
            </Typography>}

            {error?.message && <Typography variant='h3' gutterBottom align='center'>
                {error?.message}
            </Typography>}

            {question && <QuizQuestion question={question} onAnswerSubmit={handleAnswerSubmit} />}

        </Box>
    );
}

export default Quiz;
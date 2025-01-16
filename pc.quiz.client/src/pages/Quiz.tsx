import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useQuestion } from '../utils/queries/QuestionQueries';
import { useQuiz } from '../utils/QuizContext';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import { EntryAnswer } from '../shared/types/entities/EntryAnswer';
import { useAddEntryAnswers, useUpdateEntryAnswers } from '../utils/queries/EntryAnswerQueries';

const Quiz = () => {
    const { currentQuestionId, setCurrentQuestionId } = useQuiz();
    const { data: currentQuestion, isLoading, error } = useQuestion(currentQuestionId);
    const addEntryAnswers = useAddEntryAnswers();
    const updateEntryAnswers = useUpdateEntryAnswers();

    console.log("Quiz> question: ", currentQuestion);

    const handleNextQuestion = async (entryAnswers: EntryAnswer[]) => {
        try {
            // check if it's been submitted before
            if (currentQuestion?.entryAnswers.length === 0) {
                // if not add
                const nextQuestionId = await addEntryAnswers.mutateAsync({ entryAnswers });
                setCurrentQuestionId(nextQuestionId);
            } else {
                // if it has update
                const nextQuestionId = await updateEntryAnswers.mutateAsync({ entryAnswers });
                setCurrentQuestionId(nextQuestionId);
            }
        } catch (error) {
            console.error("Quiz> Error on handleAnswerSubmit:", error);
        }
    }

    const handlePreviousQuestion = async () => {
        // invalidate question query key
    }

    return (
        <Box sx={{ maxWidth: 1000, margin: '0 auto', flexDirection: 'column', justifyContent: 'center' }}>
            {isLoading && <Typography variant='h3' gutterBottom align='center'>
                Loading...
            </Typography>}

            {error?.message && <Typography variant='h3' gutterBottom align='center'>
                {error?.message}
            </Typography>}

            {currentQuestion && <QuizQuestion
                question={currentQuestion}
                onNextQuestion={handleNextQuestion}
                onPreviousQuestion={handlePreviousQuestion}
            />}

        </Box>
    );
}

export default Quiz;
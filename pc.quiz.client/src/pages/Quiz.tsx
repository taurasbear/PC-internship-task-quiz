import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useQuestion } from '../utils/queries/QuestionQueries';
import { useQuiz } from '../utils/QuizContext';

const Quiz = () => {
    const { currentQuestionId, setCurrentQuestionId } = useQuiz();

    const { data, isLoading, error } = useQuestion(currentQuestionId);

    const handleNextQuestion = () => {
        const nextQuestionId = Number(currentQuestionId) + 1;
        setCurrentQuestionId(nextQuestionId)
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
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

            {data && <Box>
                {data.answerOptions.map((question) => (
                    <Typography key={question.id} variant='h3'>
                        {question.displayValue}
                    </Typography>
                ))}
            </Box>}
            <Button variant='contained' onClick={handleNextQuestion}>Next question</Button>
        </Box>
    );
}

export default Quiz;

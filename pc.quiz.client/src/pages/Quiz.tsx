import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useQuestion } from '../utils/queries/QuestionQueries';
import { useQuiz } from '../utils/QuizContext';
import QuizQuestion from '../components/Quiz/QuizQuestion';

const Quiz = () => {
    const { currentQuestionId, setCurrentQuestionId } = useQuiz();

    const { data: question, isLoading, error } = useQuestion(currentQuestionId);

    console.log("Quiz> question: ", question);

    const handleNextQuestion = () => {
        const nextQuestionId = Number(currentQuestionId) + 1;
        setCurrentQuestionId(nextQuestionId)
    };

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

            {question && <QuizQuestion question={question} />}
            <Button variant='contained' onClick={handleNextQuestion}>Next question</Button>
        </Box>
    );
}

export default Quiz;

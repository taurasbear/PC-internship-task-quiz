import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useQuestions } from '../utils/queries/QuestionQueries';

const Quiz = () => {
    const { data, isLoading, error } = useQuestions();
    
    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
            <Typography variant='h2' gutterBottom>
                Welcome! This is the quiz taking page.
            </Typography>

            {isLoading && <Typography variant='h3' gutterBottom>
                Loading
            </Typography>}

            {error?.message && <Typography variant='h3' gutterBottom>
                {error?.message}
            </Typography>}

            {data && <Typography variant='h3' gutterBottom>
                {data.map((question) => <h1 key={question.id}>{question.points}</h1>)}
            </Typography>}
        </Box>
    );
}

export default Quiz;

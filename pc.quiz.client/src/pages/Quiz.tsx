import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useQuestion, useQuestionCount } from '../utils/queries/QuestionQueries';
import { useQuiz } from '../utils/QuizContext';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import { EntryAnswer } from '../shared/types/entities/EntryAnswer';
import { useAddEntryAnswers, useDeleteEntryAnswers } from '../utils/queries/EntryAnswerQueries';
import { useQueryClient } from '@tanstack/react-query';
import QuestionService from '../utils/services/QuestionService';
import { useFinishEntry } from '../utils/queries/EntryQueries';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const { currentQuestionId, setCurrentQuestionId, currentEntryId } = useQuiz();
    const { data: currentQuestion, isLoading, error } = useQuestion(currentQuestionId, currentEntryId);
    const { data: questionCount } = useQuestionCount();
    const addEntryAnswers = useAddEntryAnswers();
    const deleteEntryAnswers = useDeleteEntryAnswers();
    const finishEntry = useFinishEntry();
    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const handleNextQuestion = async (entryAnswers: EntryAnswer[]) => {
        const nextQuestionId = await saveEntryAnswers(entryAnswers);
        queryClient.invalidateQueries({ queryKey: ['question', nextQuestionId] });
        setCurrentQuestionId(nextQuestionId);
    }

    const handlePreviousQuestion = async (entryAnswers: EntryAnswer[]) => {
        if (entryAnswers.length !== 0) {
            await saveEntryAnswers(entryAnswers);
        } else {
            await deleteCurrentEntryAnswers();
        }

        const previousQuestionId = await queryClient.fetchQuery({
            queryKey: ['previousQuestion', currentQuestionId],
            queryFn: () => QuestionService.getPreviousQuestionId(Number(currentQuestionId))
        });

        queryClient.invalidateQueries({ queryKey: ['question', previousQuestionId] });
        setCurrentQuestionId(previousQuestionId);
    }

    const handleFinish = async (entryAnswers: EntryAnswer[]) => {
        await saveEntryAnswers(entryAnswers);
        await finishEntry.mutateAsync({ entryId: currentEntryId! });
        navigate('/leaderboard');
    }

    const saveEntryAnswers = async (entryAnswers: EntryAnswer[]) => {
        if (currentQuestion?.entryAnswers.length !== 0) {
            deleteCurrentEntryAnswers();
        }

        const nextQuestionId = await addEntryAnswers.mutateAsync({ entryAnswers });
        return nextQuestionId;
    }

    const deleteCurrentEntryAnswers = async () => {
        const entryAnswerIds = currentQuestion!.entryAnswers.map(ea => Number(ea.id));
        await deleteEntryAnswers.mutateAsync({ entryAnswerIds });
    }

    return (
        <Box sx={{ maxWidth: 1100, margin: '0 auto', flexDirection: 'column', justifyContent: 'center' }}>
            {isLoading && <Typography variant='h3' gutterBottom align='center'>
                Loading...
            </Typography>}

            {error?.message && <Typography variant='h3' gutterBottom align='center'>
                {error?.message}
            </Typography>}

            {currentQuestion && <QuizQuestion
                question={currentQuestion}
                questionCount={Number(questionCount)}
                onNextQuestion={handleNextQuestion}
                onPreviousQuestion={handlePreviousQuestion}
                onFinish={handleFinish}
            />}

        </Box>
    );
}

export default Quiz;
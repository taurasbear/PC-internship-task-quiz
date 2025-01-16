import { Navigate } from 'react-router-dom';
import { useQuiz } from '../../utils/QuizContext';
import { Box, CircularProgress } from '@mui/material';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const { currentEntryId, loading } = useQuiz();

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box >
        );
    }

    if (!currentEntryId) {
        localStorage.clear();
        return <Navigate to='/start' />
    }

    return element;
}

export default ProtectedRoute;
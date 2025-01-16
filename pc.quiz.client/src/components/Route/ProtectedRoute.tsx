import { Navigate } from 'react-router-dom';
import { useQuiz } from '../../utils/QuizContext';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const { currentEntryId } = useQuiz();

    if (!currentEntryId) {
        localStorage.clear();
        return <Navigate to='/start' />
    }

    return element;
}

export default ProtectedRoute;
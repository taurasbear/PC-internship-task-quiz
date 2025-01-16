import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Start from './pages/Start';
import Leaderboard from './pages/Leaderboard';
import ProtectedRoute from './components/Route/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/quiz' element={<ProtectedRoute element={<Quiz />} />} />
                <Route path='/start' element={<Start />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='*' element={<Navigate to='/quiz' replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
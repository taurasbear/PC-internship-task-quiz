import Quiz from './pages/Quiz';
import { QuizProvider } from './utils/QuizContext';

function App() {

    return (
        <QuizProvider>
            <Quiz />
        </QuizProvider>
    );
}

export default App;
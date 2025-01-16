import Quiz from './pages/Quiz';
import Start from './pages/Start';
import { QuizProvider } from './utils/QuizContext';

function App() {

    return (
        <QuizProvider>
            {/* <Quiz /> */}
            <Start />
        </QuizProvider>
    );
}

export default App;
import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from 'react';

interface QuizContextProps {
    currentQuestionId: number | null;
    setCurrentQuestionId: (id: number | null) => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(null);

    useEffect(() => {
        const savedQuestionId = localStorage.getItem('currentQuestionId');
        if (savedQuestionId) {
            setCurrentQuestionId(Number(savedQuestionId));
        } else {
            setCurrentQuestionId(process.env.REACT_APP_STARTING_QUESTION_ID ? parseInt(process.env.REACT_APP_STARTING_QUESTION_ID) : 1);
        }
    }, []);

    useEffect(() => {
        if (currentQuestionId !== null) {
            localStorage.setItem('currentQuestionId', currentQuestionId.toString());
        }
    }, [currentQuestionId])

    const value = useMemo(() => ({ currentQuestionId, setCurrentQuestionId }), [currentQuestionId]);

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz must be inside a QuizProvider');
    }
    return context;
}
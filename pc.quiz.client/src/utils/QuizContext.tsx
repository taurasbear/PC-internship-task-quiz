import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from 'react';

interface QuizContextProps {
    currentQuestionId: number | null;
    setCurrentQuestionId: (id: number | null) => void;
    //TODO: store Email and EntryId
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(null);

    useEffect(() => {
        const savedQuestionId = localStorage.getItem('currentQuestionId');
        const startingId = process.env.REACT_APP_STARTING_QUESTION_ID
            ? parseInt(process.env.REACT_APP_STARTING_QUESTION_ID)
            : 1;

        if (savedQuestionId) {
            setCurrentQuestionId(Number(savedQuestionId));
        } else {
            setCurrentQuestionId(startingId);
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
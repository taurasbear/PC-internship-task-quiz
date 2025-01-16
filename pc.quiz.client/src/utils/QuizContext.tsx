import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from 'react';

interface QuizContextProps {
    currentQuestionId: number | null;
    setCurrentQuestionId: (questionId: number | null) => void;
    currentEntryId: number | null;
    setCurrentEntryId: (entryId: number | null) => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(null);
    const [currentEntryId, setCurrentEntryId] = useState<number | null>(null);

    useEffect(() => {
        const savedEntryId = localStorage.getItem('currentEntryId');
        const savedQuestionId = localStorage.getItem('currentQuestionId');
        const startingQuestionId = process.env.REACT_APP_STARTING_QUESTION_ID
            ? parseInt(process.env.REACT_APP_STARTING_QUESTION_ID)
            : 1;

        if (savedEntryId) {
            setCurrentEntryId(Number(savedEntryId));
        }

        if (savedQuestionId) {
            setCurrentQuestionId(Number(savedQuestionId));
        } else {
            setCurrentQuestionId(startingQuestionId);
        }
    }, []);

    useEffect(() => {
        if (currentEntryId !== null) {
            localStorage.setItem('currentEntryId', currentEntryId.toString());
        }
    }, [currentEntryId])

    useEffect(() => {
        if (currentQuestionId !== null) {
            localStorage.setItem('currentQuestionId', currentQuestionId.toString());
        }
    }, [currentQuestionId])

    const value = useMemo(() => ({
        currentQuestionId, setCurrentQuestionId,
        currentEntryId, setCurrentEntryId
    }),
        [currentQuestionId, currentEntryId]);
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
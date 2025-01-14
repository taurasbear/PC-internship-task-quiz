import { Box, Button, Typography } from "@mui/material";
import { Question } from "../../shared/types/entities/Question";
import QuestionAnswers from "./QuestionAnswers";
import { useState } from "react";
import { EntryAnswer } from "../../shared/types/entities/EntryAnswer";

const QuizQuestion = ({ question, onAnswerSubmit }: {
    question: Question,
    onAnswerSubmit: (entryAnswers: EntryAnswer[]) => void
}) => {

    const [entryAnswers, setEntryAnswers] = useState<EntryAnswer[]>([]);

    const handleNextQuestion = () => {
        onAnswerSubmit(entryAnswers);
    };

    return (
        <Box>
            <Typography variant='h2'>
                {question.title}
            </Typography>
            <QuestionAnswers
                questionType={question.type}
                answerOptions={question.answerOptions}
                setEntryAnswers={setEntryAnswers}
            />
            <Button variant='contained' onClick={handleNextQuestion}>Next question</Button>
        </Box>
    );
}

export default QuizQuestion;
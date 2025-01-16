import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
        <Grid container>
            <Grid size={12} padding={10}>
                <Typography variant='h2' align='center'>
                    {question.title}
                </Typography>
            </Grid>
            <Grid size={12}>
                <QuestionAnswers
                    questionType={question.type}
                    answerOptions={question.answerOptions}
                    setEntryAnswers={setEntryAnswers}
                />
            </Grid>
            <Grid size={12} alignItems={'flex-end'}>
                <Box display="flex" justifyContent="flex-end">
                    <Button onClick={handleNextQuestion} variant='contained'>
                        Next question
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default QuizQuestion;
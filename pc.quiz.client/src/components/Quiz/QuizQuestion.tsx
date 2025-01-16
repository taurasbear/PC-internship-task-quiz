import { Alert, Box, Button, Typography } from "@mui/material";
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
    const [validationError, setValidationError] = useState(false);

    const handleNextQuestion = () => {
        if (entryAnswers.length === 0) {
            setValidationError(true);
        } else {
            setValidationError(false);
            onAnswerSubmit(entryAnswers);
            setEntryAnswers([]);
        }
    };

    return (
        <Grid container>
            <Grid size={12} padding={10}>
                <Typography variant='h2' align='center'>
                    {question.title}
                </Typography>
            </Grid>
            <Grid size={3} paddingBottom={3}>
                {validationError && <Alert severity='error'>Please give an answer.</Alert>}
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
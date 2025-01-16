import { Alert, Box, Button, MobileStepper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Question } from "../../shared/types/entities/Question";
import QuestionAnswers from "./QuestionAnswers";
import { useState } from "react";
import { EntryAnswer } from "../../shared/types/entities/EntryAnswer";
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';

const QuizQuestion = ({ question, onNextQuestion, onPreviousQuestion }: {
    question: Question,
    onNextQuestion: (entryAnswers: EntryAnswer[]) => void,
    onPreviousQuestion: (entryAnswers: EntryAnswer[]) => void
}) => {
    const [entryAnswers, setEntryAnswers] = useState<EntryAnswer[]>(question.entryAnswers || []);
    const [validationError, setValidationError] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    const handleNextQuestion = () => {
        setActiveStep((prev) => prev++)
        // if (entryAnswers.length === 0) {
        //     setValidationError(true);
        // } else {
        //     setValidationError(false);
        //     onAnswerSubmit(entryAnswers);
        //     setEntryAnswers([]);
        // }
    };

    const handlePreviousQuestion = () => {
        setActiveStep((prev) => prev--)
    };

    return (
        <Grid container>
            <Grid size={12} padding={10}>
                <Typography variant='h2' align='center'>
                    {question.title}
                </Typography>
            </Grid>
            <MobileStepper
                variant="progress"
                steps={6}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNextQuestion} disabled={activeStep === 5}>
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handlePreviousQuestion} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
            <Grid size={3} paddingBottom={3}>
                {validationError && <Alert severity='error'>Please give an answer.</Alert>}
            </Grid>
            <Grid size={12}>
                <QuestionAnswers
                    questionType={question.type}
                    answerOptions={question.answerOptions}
                    setEntryAnswers={setEntryAnswers}
                    entryAnswers={entryAnswers}
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
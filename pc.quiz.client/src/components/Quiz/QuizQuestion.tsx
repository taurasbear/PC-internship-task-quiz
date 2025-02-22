import { Alert, Box, MobileStepper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Question } from "../../shared/types/entities/Question";
import QuestionAnswers from "./QuestionAnswers";
import { useState } from "react";
import { EntryAnswer } from "../../shared/types/entities/EntryAnswer";
import useInitialValue from "../../shared/hooks/useInitialValue";
import NextButton from "./Buttons/NextButton";
import PreviousButton from "./Buttons/PreviousButton";

const QuizQuestion = ({ question, questionCount, onNextQuestion, onPreviousQuestion, onFinish }: {
    question: Question,
    questionCount: number,
    onNextQuestion: (entryAnswers: EntryAnswer[]) => Promise<void>,
    onPreviousQuestion: (entryAnswers: EntryAnswer[]) => Promise<void>
    onFinish: (entryAnswers: EntryAnswer[]) => Promise<void>
}) => {
    const [entryAnswers, setEntryAnswers] = useInitialValue<EntryAnswer[]>(question.entryAnswers || []);
    const [validationError, setValidationError] = useState(false);

    const handleNextQuestion = async () => {
        if (entryAnswers.length === 0) {
            setValidationError(true);
        } else {
            setValidationError(false);
            await onNextQuestion(entryAnswers);
        }
    };

    const handlePreviousQuestion = async () => {
        setValidationError(false);
        await onPreviousQuestion(entryAnswers);
    };

    const handleFinish = async () => {
        if (entryAnswers.length === 0) {
            setValidationError(true);
        } else {
            setValidationError(false);
            await onFinish(entryAnswers);
        }
    }

    return (
        <Grid container>
            <Grid size={12} sx={{ paddingTop: 10, paddingRight: 10, paddingBottom: 10, height: '250px' }}>
                <Typography variant='h2' align='left'>
                    {question.title}
                </Typography>
            </Grid>

            <Grid size={3} sx={{ height: '60px' }}>
                {validationError && <Alert severity='error'>Please give an answer.</Alert>}
            </Grid>
            <Grid size={12} sx={{ height: '200px' }}>
                <QuestionAnswers
                    questionType={question.type}
                    answerOptions={question.answerOptions}
                    entryAnswers={entryAnswers}
                    setEntryAnswers={setEntryAnswers}
                />
            </Grid>
            <Grid size={12} alignItems={'flex-end'}>
                <Box display="flex" justifyContent="center">
                    <MobileStepper
                        variant="progress"
                        steps={questionCount}
                        position="static"
                        activeStep={question.id - 1}
                        sx={{ maxWidth: 400, flexGrow: 1 }}
                        nextButton={
                            <NextButton
                                onClick={handleNextQuestion}
                                onFinish={handleFinish}
                                isLastQuestion={questionCount === question.id}
                            />
                        }
                        backButton={
                            <PreviousButton
                                onClick={handlePreviousQuestion}
                                disabled={question.id === 1}
                            />
                        }
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default QuizQuestion;
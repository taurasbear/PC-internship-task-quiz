import { Box, Typography } from "@mui/material";
import { AnswerOption } from "../../shared/types/entities/AnswerOption";
import { QuestionType } from "../../shared/types/enums/QuestionType";
import SingleAnswers from "./AnswerOptionTypes/SingleAnswers";
import MultipleAnswers from "./AnswerOptionTypes/MultipleAnswers";
import TextAnswer from "./AnswerOptionTypes/TextAnswer";
import { EntryAnswer } from "../../shared/types/entities/EntryAnswer";
import { useQuiz } from "../../utils/QuizContext";

const QuestionAnswers = ({ questionType, answerOptions, entryAnswers, setEntryAnswers }:
    {
        questionType: QuestionType,
        answerOptions: AnswerOption[],
        entryAnswers: EntryAnswer[],
        setEntryAnswers: React.Dispatch<React.SetStateAction<EntryAnswer[]>>
    }) => {

    const { currentQuestionId, currentEntryId } = useQuiz();

    const handleSingleAnswerChange = (value: number) => {
        const entryAnswer: EntryAnswer = {
            questionId: Number(currentQuestionId),
            entryId: currentEntryId!,
            answerOptionId: Number(value),
        }

        setEntryAnswers([entryAnswer]);
    }

    const handleMultipleAnswerChange = (values: number[]) => {
        const entryAnswers: EntryAnswer[] = values.map(v => ({
            questionId: Number(currentQuestionId),
            entryId: currentEntryId!,
            answerOptionId: Number(v)
        }));
        setEntryAnswers(entryAnswers);
    }

    const handleTextAnswerChange = (value: string) => {
        if (value.trim() !== "") {
            const entryAnswer: EntryAnswer = {
                questionId: Number(currentQuestionId),
                entryId: currentEntryId!,
                normalizedValue: value.toUpperCase()
            }
            setEntryAnswers([entryAnswer]);
        } else {
            setEntryAnswers([]);
        }
    }

    switch (questionType) {
        case QuestionType.Single:
            return (
                <SingleAnswers
                    answerOptions={answerOptions}
                    initialValue={entryAnswers[0]?.answerOptionId}
                    onChange={handleSingleAnswerChange}
                />
            );
        case QuestionType.Multiple:
            return (
                <MultipleAnswers
                    answerOptions={answerOptions}
                    initialValues={entryAnswers.map(ea => ea.answerOptionId!)}
                    onChange={handleMultipleAnswerChange}
                />
            );
        case QuestionType.Text:
            return (
                <TextAnswer
                    initialValue={entryAnswers[0]?.normalizedValue}
                    onChange={handleTextAnswerChange}
                />
            );
        default:
            return (
                <Box>
                    <Typography variant='h3'>
                        Question type was not found.
                    </Typography>
                </Box>
            );
    }
}

export default QuestionAnswers;
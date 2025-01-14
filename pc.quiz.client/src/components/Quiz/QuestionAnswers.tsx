import { Box, Typography } from "@mui/material";
import { AnswerOption } from "../../shared/types/entities/AnswerOption";
import { QuestionType } from "../../shared/types/enums/QuestionType";
import SingleAnswers from "./AnswerOptionTypes/SingleAnswers";
import MultipleAnswers from "./AnswerOptionTypes/MultipleAnswers";
import TextAnswer from "./AnswerOptionTypes/TextAnswer";

const QuestionAnswers = ({ questionType, answerOptions }:
    { questionType: QuestionType, answerOptions: AnswerOption[] }) => {

    //TODO: switch statement instead of if and add API calls
    if (questionType === QuestionType.Single) {
        return (
            <SingleAnswers answerOptions={answerOptions} />
        );
    }

    if (questionType === QuestionType.Multiple) {
        return (
            <MultipleAnswers answerOptions={answerOptions} />
        );
    }

    if (questionType === QuestionType.Text) {
        return (
            <TextAnswer />
        );
    }

    return (
        <Box>
            <Typography variant='h3'>
                Question type was not found.
            </Typography>
        </Box>

    );
}

export default QuestionAnswers;
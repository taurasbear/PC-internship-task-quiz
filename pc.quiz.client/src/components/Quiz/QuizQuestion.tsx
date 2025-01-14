import { Box, Typography } from "@mui/material";
import { Question } from "../../shared/types/entities/Question";
import QuestionAnswers from "./QuestionAnswers";

const QuizQuestion = ({ question }: { question: Question }) => {

    return (
        <Box>
            <Typography variant='h2'>
                {question.title}
            </Typography>
            <QuestionAnswers
                questionType={question.type}
                answerOptions={question.answerOptions}
            />
        </Box>
    );
}

export default QuizQuestion;
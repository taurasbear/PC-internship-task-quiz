import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { AnswerOption } from "../../../shared/types/entities/AnswerOption";

const SingleAnswers = ({ answerOptions }: { answerOptions: AnswerOption[] }) => {
    return (
        <Box>
            <FormControl>
                <FormLabel id="single-question-type-label">Please select one:</FormLabel>
                <RadioGroup>
                    {answerOptions?.map(answer =>
                        <FormControlLabel
                            key={answer.id}
                            value={answer.id}
                            label={answer.displayValue}
                            control={<Radio />}
                        />
                    )}
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default SingleAnswers;
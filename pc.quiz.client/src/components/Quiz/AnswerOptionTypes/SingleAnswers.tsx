import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { AnswerOption } from "../../../shared/types/entities/AnswerOption";

const SingleAnswers = ({ answerOptions, initialValue, onChange }: {
    answerOptions: AnswerOption[],
    initialValue?: number,
    onChange: (value: number) => void
}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(Number(value));
    }

    return (
        <Box>
            <FormControl>
                <FormLabel id="single-question-type-label">Please select one:</FormLabel>
                <RadioGroup onChange={handleChange} value={initialValue}>
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
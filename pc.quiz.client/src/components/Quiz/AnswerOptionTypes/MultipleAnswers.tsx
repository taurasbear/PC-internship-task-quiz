import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { AnswerOption } from "../../../shared/types/entities/AnswerOption";


const MultipleAnswers = ({ answerOptions }: { answerOptions: AnswerOption[] }) => {
    return (
        <Box>
            <FormGroup>
                {answerOptions?.map(answer =>
                    <FormControlLabel
                        key={answer.id}
                        value={answer.id}
                        label={answer.displayValue}
                        control={<Checkbox />}
                    />
                )}
            </FormGroup>
        </Box>
    );
}

export default MultipleAnswers;
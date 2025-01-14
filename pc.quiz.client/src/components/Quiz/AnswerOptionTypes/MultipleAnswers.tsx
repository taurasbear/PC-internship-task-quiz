import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { AnswerOption } from "../../../shared/types/entities/AnswerOption";
import { useState } from "react";


const MultipleAnswers = ({ answerOptions, onChange }: {
    answerOptions: AnswerOption[],
    onChange: (values: number[]) => void,
}) => {

    const [selectedValues, setSelectedValues] = useState<number[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        const isChecked = event.target.checked;

        setSelectedValues((prev: number[]) =>
            isChecked ? [...prev, value] : prev.filter((v: number) => v !== value)
        )

        onChange(selectedValues);
    }

    return (
        <Box>
            <FormGroup>
                {answerOptions?.map(answer =>
                    <FormControlLabel
                        key={answer.id}
                        value={answer.id}
                        label={answer.displayValue}
                        control={
                            <Checkbox
                                onChange={handleChange}
                                checked={selectedValues.includes(answer.id)}
                            />}
                    />
                )}
            </FormGroup>
        </Box>
    );
}

export default MultipleAnswers;
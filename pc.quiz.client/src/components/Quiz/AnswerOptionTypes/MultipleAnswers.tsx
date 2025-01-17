import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { AnswerOption } from "../../../shared/types/entities/AnswerOption";
import useInitialValue from "../../../shared/hooks/useInitialValue";

const MultipleAnswers = ({ answerOptions, initialValues, onChange }: {
    answerOptions: AnswerOption[],
    initialValues?: number[],
    onChange: (values: number[]) => void,
}) => {
    const [selectedValues, setSelectedValues] = useInitialValue<number[]>(initialValues || []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        const isChecked = event.target.checked;

        const newSelectedValues = isChecked
            ? [...selectedValues, value]
            : selectedValues.filter((v: number) => v !== value);

        setSelectedValues(newSelectedValues);

        onChange(newSelectedValues);
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
import { Box, TextField } from "@mui/material";
import useInitialValue from "../../../shared/hooks/useInitialValue";

const TextAnswer = ({ initialValue, onChange }: {
    initialValue?: string,
    onChange: (value: string) => void
}) => {

    const [typedValue, setTypedValue] = useInitialValue(initialValue ?? '')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTypedValue(value);
        onChange(value);
    }

    return (
        <Box sx={{ width: 240 }}>
            <TextField
                onChange={handleChange}
                value={typedValue}
                required
                id="text-question-type-field"
                label="Please type your answer"
                fullWidth
            />
        </Box>
    );
}

export default TextAnswer;
import { Box, TextField } from "@mui/material";

const TextAnswer = ({ onChange }: {
    onChange: (value: string) => void
}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(value);
    }

    return (
        <Box sx={{ maxWidth: 330 }}>
            <TextField
                onChange={handleChange}
                required
                id="text-question-type-field"
                label="Please type your answer"
            />
        </Box>
    );
}

export default TextAnswer;
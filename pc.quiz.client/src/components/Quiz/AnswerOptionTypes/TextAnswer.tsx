import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const TextAnswer = ({ initialValue, onChange }: {
    initialValue?: string,
    onChange: (value: string) => void
}) => {

    const [value, setValue] = useState(initialValue ?? '')

    useEffect(() => {
        setValue(initialValue || '');
    }, [initialValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
        onChange(value);
    }

    return (
        <Box sx={{ maxWidth: 330 }}>
            <TextField
                onChange={handleChange}
                value={value}
                required
                id="text-question-type-field"
                label="Please type your answer"
            />
        </Box>
    );
}

export default TextAnswer;
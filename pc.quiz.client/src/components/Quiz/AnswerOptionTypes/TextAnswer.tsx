import { Box, TextField } from "@mui/material";

const TextAnswer = () => {
    return (
        <Box>
            <TextField
                required
                id="text-question-type-field"
                label="Please type your answer"
            />
        </Box>
    );
}

export default TextAnswer;
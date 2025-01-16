import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email is required')
});

const Start = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            await schema.validate({ email: value });
            setError(false);
            setHelperText('');
        } catch (err) {
            setError(true);
            setHelperText(err.message);
        }
    }

    return (
        <Box>
            <Typography variant='h2'>
                Welcome!
            </Typography>
            <TextField
                id='email-field'
                variant='outlined'
                label='E-mail'
                value={value}
                error={error}
                onChange={handleChange}
                helperText={helperText}
                required
            />
            <Button onClick={handleSubmit}>
                Start quiz
            </Button>
        </Box>
    );
}

export default Start;
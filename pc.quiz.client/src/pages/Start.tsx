import { Button, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { useCreateEntry } from "../utils/queries/EntryQueries";
import { useQuiz } from "../utils/QuizContext";

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email is required')
});

const Start = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const navigate = useNavigate();
    const createEntry = useCreateEntry();
    const { setCurrentEntryId } = useQuiz();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            await schema.validate({ email: value });
            setError(false);
            setHelperText('');
            const entryId = await createEntry.mutateAsync({ email: value });
            setCurrentEntryId(entryId);
            navigate('/quiz');
        } catch (err) {
            setError(true);
            setHelperText(err.message);
        }
    }

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
            <Grid size={12}>
                <Typography variant='h2' align='center'>
                    Welcome!
                </Typography>
            </Grid>
            <Grid size={12} style={{ maxWidth: 300, marginTop: 16 }}>
                <TextField
                    id='email-field'
                    variant='outlined'
                    label='E-mail'
                    value={value}
                    error={error}
                    onChange={handleChange}
                    helperText={helperText}
                    required
                    fullWidth
                />
            </Grid>
            <Grid size={12} style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleSubmit}>
                    Start quiz
                </Button>
            </Grid>
        </Grid>
    );
}

export default Start;
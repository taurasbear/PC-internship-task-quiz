import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f4e0c0',
        },
        secondary: {
            main: '#e9f108',
        },
        background:
        {
            default: '#121212',
            paper: '#282828',
        },
    },
});

export default theme;
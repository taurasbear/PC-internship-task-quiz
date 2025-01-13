import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f4e0c0',//'#6a8063',
        },
        secondary: {
            main: '#e9f108',
        },
        // action: {
        //     hover: '#6a8063',
        // },
        background:
        {
            default: '#121212',//'#22181C',
            paper: '#282828',
        },
    },
});

export default theme;
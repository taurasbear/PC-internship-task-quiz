import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx'
import theme from './theme.ts'
import queryClient from './api/queryClient.ts';
import { QuizProvider } from './utils/QuizContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuizProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </QuizProvider>
  </StrictMode>,
)

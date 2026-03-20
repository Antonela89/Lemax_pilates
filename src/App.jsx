import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from '@/theme/theme';
import { Button, Box, Typography } from '@mui/material';
import Layout from './components/layout/Layout';

function App() {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(`${mode}-mode`);
    }, [mode]);

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline normaliza el CSS y aplica el color de fondo del tema */}
            <CssBaseline />

            <Layout>
                {/* Prueba de tema - Borrar cuando se coloque el cambio de tema en el navbar*/}
                <Box sx={{ p: 4, textAlign: 'center', minHeight: '100vh' }}>
                    <Typography variant="h1" color="primary" gutterBottom>
                        LEMAX PILATES
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Find your balance, strengthen your core.
                    </Typography>

                    <Button variant="contained" onClick={toggleColorMode}>
                        Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
                    </Button>
                </Box>
            </Layout>
        </ThemeProvider>
    );
}

export default App;

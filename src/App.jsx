import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from '@/theme/theme';
import { Button } from '@mui/material';
import Layout from './components/layout/Layout';
import HeroSection from './features/hero/HeroSection';
import BenefitsSection from './features/benefits/BenefitsSection';
import lemaxData from './data/data.json';

function App() {
    const { benefits } = lemaxData;
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
                <Button variant="contained" onClick={toggleColorMode}>
                    Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
                </Button>

                <HeroSection />
                <BenefitsSection benefits={benefits}/> 
            </Layout>
        </ThemeProvider>
    );
}

export default App;

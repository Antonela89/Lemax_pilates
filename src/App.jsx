import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from '@/theme/theme';
import Layout from './components/layout/Layout';
import HeroSection from './features/hero/HeroSection';
import ServicesSection from './features/servicesSection/ServicesSection';
import BenefitsSection from './features/benefits/BenefitsSection';
import Locations from './features/locations/Locations';
import TeamSection from './features/team/TeamSection';
import Reviews from './features/reviews/Reviews';
import ContactCTA from './features/ContactCTA/ContactCTA';
import lemaxData from './data/data.json';

function App() {
    const { benefits, services, staff, locations, reviews, contact } = lemaxData;
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

            <Layout mode={mode} toggleColorMode={toggleColorMode}>
                <HeroSection />
                <ServicesSection services={services} />
                <BenefitsSection benefits={benefits}/> 
                <Locations locations={locations} />
                <TeamSection staff={staff} />
                <Reviews reviews={reviews} />
                <ContactCTA contact={contact} />
            </Layout>
        </ThemeProvider>
    );
}

export default App;

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
import ReelsSection from './features/reels/ReelsSection';
import lemaxData from './data/data.json';
import SEO from './components/common/SEO/SEO';

function App() {
    const { benefits, services, staff, locations, reviews } = lemaxData;
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

            {/*Etiquetas meta*/}
            <SEO 
                title="Inicio" 
                description="Descubrí el método que transforma tu cuerpo en Le Max Pilates. Clases personalizadas en Rafaela."
            />

            <Layout
                mode={mode}
                toggleColorMode={toggleColorMode}
                data={lemaxData}
            >
                <HeroSection />
                <ServicesSection services={services} />
                <BenefitsSection benefits={benefits} />
                <Locations locations={locations} />
                <TeamSection staff={staff} />
                <ReelsSection />
                <Reviews reviews={reviews} />
                <ContactCTA contact={locations} />
            </Layout>
        </ThemeProvider>
    );
}

export default App;

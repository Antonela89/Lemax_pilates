import React from 'react';
import { Box, Container, useTheme } from '@mui/material';

// Componentes Reutilizables
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import LocationCard from '@/components/common/Cards/LocationCard'; // IMPORTANTE

// Configuración y Animaciones
import { fadeInUpLeft, staggerContainer } from '@/theme/animations';

// Importación de imágenes
import local1 from '@/assets/images/location/local1.jpg';
import local2 from '@/assets/images/location/local2.jpg';
import mapBgDark from '@/assets/images/location/map_bg_dark.webp';
import mapBgLight from '@/assets/images/location/map_bg_light.webp';

const Locations = ({ locations = [] }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const currentMap = isDarkMode ? mapBgDark : mapBgLight;
    const images = [local1, local2];

    return (
        <SectionContainer id="locales" background="default" animation={staggerContainer}>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden',
                }}
            >
                {/* 1. EL MAPA (Fondo inmersivo) */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -50, left: 0, width: '100%', bottom: -100,
                        backgroundImage: `url(${currentMap})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: isDarkMode
                            ? 'brightness(0.9) saturate(2) contrast(1.2)'
                            : 'brightness(0.95) saturate(1.6) contrast(1.1)',
                        opacity: isDarkMode ? 0.9 : 0.7,
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                {/* 2. DESVANECIMIENTOS DE FONDO */}
                <Box sx={{
                    position: 'absolute',
                    top: -75, left: 0, width: '100%', height: '350px',
                    background: `linear-gradient(to bottom, ${theme.palette.background.default} 10%, transparent 100%)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                }} />

                <Box sx={{
                    position: 'absolute',
                    top: -100, left: 0, width: '100%', bottom: -100,
                    background: `radial-gradient(circle at center, transparent 0%, ${theme.palette.background.default} 95%)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                }} />

                {/* 3. CONTENIDO PRINCIPAL */}
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 4, md: 8 } }}>
                    <TitleSection
                        textOverline="NUESTROS LOCALES"
                        texth2="VISITANOS"
                        animation={fadeInUpLeft}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 5,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                        }}
                    >
                        {locations.map((loc, index) => (
                            <LocationCard 
                                key={loc.id} 
                                loc={loc} 
                                index={index} 
                                image={images[index]} 
                            />
                        ))}
                    </Box>
                </Container>
                
                {/* Espacio para la onda separadora que viene después */}
                <Box sx={{ height: { xs: '40px', md: '95px' } }} /> 
            </Box>
        </SectionContainer>
    );
};

export default Locations;
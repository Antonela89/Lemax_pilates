import { useState, useEffect } from 'react';
import { Box, Container, useTheme } from '@mui/material';

// Componentes Reutilizables
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import LocationCard from '@/components/common/Cards/LocationCard';
import TripleGlowWave from '@/components/common/Divider/TripleGlowWave';

// Configuración y Animaciones
import { fadeInUpLeft, staggerContainer } from '@/theme/animations';

// Importación de imágenes
import local1 from '@/assets/images/location/local1.jpg';
import local2 from '@/assets/images/location/local2.jpg';
import mapBgDark from '@/assets/images/location/map_bg_dark.webp';
import mapBgLight from '@/assets/images/location/map_bg_light.webp';

const Locations = ({ locations = [] }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true); // 🟢 Estado de carga como en Reviews
    const isDarkMode = theme.palette.mode === 'dark';

    const bgNextSection = theme.palette.background.alternate;
    const currentMap = isDarkMode ? mapBgDark : mapBgLight;
    const images = [local1, local2];

    useEffect(() => {
        // 🟢 Simulamos la carga para mostrar el Skeleton (Efecto Premium)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); 
        return () => clearTimeout(timer);
    }, []);

    // Si no hay datos y terminó de cargar, ocultamos la sección
    if (!loading && (!locations || locations.length === 0)) return null;

    return (
        <SectionContainer
            id="locales"
            background="transparent"
            animation={staggerContainer}
        >
            <TripleGlowWave
                colorTop={bgNextSection}
                colorBottom="transparent"
            />

            <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                
                {/* 1. EL MAPA (Fondo) */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -50, left: 0, width: '100%', bottom: -200,
                        backgroundImage: `url(${currentMap})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: isDarkMode 
                            ? 'brightness(0.7) saturate(1.5)' 
                            : 'brightness(0.9) opacity(0.5)',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                {/* 2. OVERLAYS DE GRADIENTE */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -75, left: 0, width: '100%', height: '350px',
                        background: `linear-gradient(to bottom, ${theme.palette.background.default} 10%, transparent 100%)`,
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />

                {/* 3. CONTENIDO (CARDS) */}
                <Container
                    maxWidth="lg"
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        py: { xs: 4, md: 8 },
                    }}
                >
                    <TitleSection
                        textOverline="NUESTROS LOCALES"
                        texth2="VISITANOS"
                        animation={fadeInUpLeft}
                    />

                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 5,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                        }}
                    >
                        {loading ? (
                            // 🟢 Muestra Skeletons mientras carga (Igual que en Reviews)
                            [1, 2].map((_, i) => (
                                <LocationCard key={`skeleton-${i}`} loading={true} index={i} />
                            ))
                        ) : (
                            // 🟢 Muestra los datos reales
                            locations.map((loc, index) => (
                                <LocationCard
                                    key={loc.id || index}
                                    loc={loc}
                                    index={index}
                                    image={images[index] || local1}
                                    loading={false}
                                />
                            ))
                        )}
                    </Box>
                </Container>

                <Box sx={{ height: { xs: '40px', md: '95px' } }} />
            </Box>
        </SectionContainer>
    );
};

export default Locations;
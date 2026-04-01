import { useState, useEffect } from 'react';
import { Box, Container, useTheme } from '@mui/material';
import { motion } from 'motion/react';

// Componentes Reutilizables
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import LocationCard from '@/components/common/Cards/LocationCard';
import TripleGlowWave from '@/components/common/Divider/TripleGlowWave';

// Configuración y Animaciones
import { fadeInUpRight, staggerContainer } from '@/theme/animations';

// Importación de imágenes
import local1 from '@/assets/images/location/local1.webp';
import local2 from '@/assets/images/location/local2.webp';
import mapBgDark from '@/assets/images/location/map_bg_dark.webp';
import mapBgLight from '@/assets/images/location/map_bg_light.webp';

const MotionBox = motion.create(Box);

const Locations = ({ locations = [] }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const isDarkMode = theme.palette.mode === 'dark';

    const bgNextSection = theme.palette.background.alternate;
    const currentMap = isDarkMode ? mapBgDark : mapBgLight;
    const images = [local1, local2];

    useEffect(() => {
        // Simulación de carga para mostrar el Skeleton
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading && (!locations || locations.length === 0)) return null;

    return (
        <SectionContainer
            id="locales"
            background="transparent"
            animation={fadeInUpRight}
            aria-labelledby="locales-title"
            sx={{
                position: 'relative',
                zIndex: 1,
                transform: 'translateZ(0)',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 10,
                    pointerEvents: 'none',
                    maskImage:
                        'linear-gradient(to top, transparent 0%, black 50px)',
                }}
            >
                <TripleGlowWave
                    colorTop={bgNextSection}
                    colorBottom="transparent"
                />
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    overflow: 'hidden',
                    mt: '-1px',
                    pt: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24 },
                    px: { xs: 2, sm: 8, md: 12 },
                    pb: { xs: 12, sm: 18, md: 24, lg: 32, xl: 40 },
                }}
            >
                {/*  MAPA (Fondo) */}
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        bottom: { xs: -300, md: -200, lg: -100 },
                        backgroundImage: `url(${currentMap})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: isDarkMode
                            ? 'brightness(0.6) saturate(1.2) contrast(1.1)'
                            : 'brightness(0.9) opacity(0.4)',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                {/* OVERLAYS DE GRADIENTE */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '400px',
                        background: `linear-gradient(to bottom, ${theme.palette.background.default} 10%, transparent 100%)`,
                        zIndex: 1,
                        pointerEvents: 'none',
                        opacity: 0.8,
                    }}
                />

                {/* CARDS*/}
                <Container
                    maxWidth="lg"
                    sx={{
                        bgcolor: 'transparent',
                        position: 'relative',
                        zIndex: 10,
                        py: { xs: 4, md: 8 },
                        mb: { xs: '60px', sm: '80px', md: '100px' },
                    }}
                >
                    <TitleSection
                        id="locales-title"
                        textOverline="NUESTROS LOCALES"
                        texth2="VISITANOS"
                        animation={fadeInUpRight}
                    />

                    <MotionBox
                        variants={staggerContainer}
                        sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: { xs: 4, md: 6 },
                            justifyContent: 'center',
                            alignItems: 'stretch',
                        }}
                    >
                        {loading
                            ? // skeleton de 2 cards
                              [1, 2].map((_, i) => (
                                  <LocationCard
                                      key={`skeleton-${i}`}
                                      loading={true}
                                      index={i}
                                  />
                              ))
                            : //Datos reales
                              locations.map((loc, index) => (
                                  <LocationCard
                                      key={loc.id || index}
                                      loc={loc}
                                      index={index}
                                      image={images[index] || local1}
                                      loading={false}
                                  />
                              ))}
                    </MotionBox>
                </Container>
            </Box>
        </SectionContainer>
    );
};

export default Locations;

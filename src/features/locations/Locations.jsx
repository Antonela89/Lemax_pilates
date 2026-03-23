import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    useTheme,
    Card,
    CardMedia,
    CardContent,
    alpha,
} from '@mui/material';
import { motion } from 'motion/react';

// Componentes Reutilizables
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';

// Archivos de Configuración
import data from '@/data/data.json';
import {
    fadeInUpLeft,
    fadeInUpRight,
    staggerContainer,
} from '@/theme/animations';

// Iconos
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';

// Importación de imágenes
import local1 from '@/assets/images/location/local1.jpg';
import local2 from '@/assets/images/location/local2.jpg';
import mapBgDark from '@/assets/images/location/map_bg_dark.webp';
import mapBgLight from '@/assets/images/location/map_bg_light.webp';

const MotionBox = motion(Box);

const Locations = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const currentMap = isDarkMode ? mapBgDark : mapBgLight;
    const images = [local1, local2];

    // ---  FUNCIÓN DE HORARIOS ---
    const getScheduleInfo = (schedule) => {
        const days = Object.keys(schedule);
        if (!days.length) return '';

        const allHours = Object.values(schedule).flat().sort();
        const firstHour = allHours[0];
        const lastHour = allHours[allHours.length - 1];

        const firstDay = days[0];
        const lastDay = days[days.length - 1];

        return `${firstDay} a ${lastDay}: ${firstHour} - ${lastHour}`;
    };

    return (
        <SectionContainer background="default" animation={staggerContainer}>
            {/* CONTENEDOR INTERNO PARA EL MAPA */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '100%',
                    mt: 0,
                    overflow: 'hidden',
                }}
            >
                {/* 1. EL MAPA (Black & Gold) */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -50,
                        left: 0,
                        width: '100%',
                        bottom: -100,
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

                {/* 2. DESVANECIMIENTO SUPERIOR */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -75,
                        left: 0,
                        width: '100%',
                        height: '350px',
                        background: `linear-gradient(to bottom, ${theme.palette.background.default} 10%, transparent 100%)`,
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />

                {/* 3. GRADIENTE RADIAL */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -100,
                        left: 0,
                        width: '100%',
                        bottom: -100,
                        background: `radial-gradient(circle at center, transparent 0%, ${theme.palette.background.default} 95%)`,
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />

                {/* 4. CONTENIDO (TARJETAS DINÁMICAS) */}
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
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 5,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                        }}
                    >
                        {data.locations.map((loc, index) => (
                            <MotionBox
                                key={loc.id}
                                variants={
                                    index === 0 ? fadeInUpLeft : fadeInUpRight
                                }
                                sx={{ flex: 1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: alpha(
                                            theme.palette.background.default,
                                            isDarkMode ? 0.6 : 0.55
                                        ),
                                        backdropFilter:
                                            'blur(16px) saturate(1.8)',
                                        borderRadius: '20px',
                                        border: '1px solid',
                                        borderColor: alpha(
                                            theme.palette.primary.main,
                                            isDarkMode ? 0.25 : 0.4
                                        ),
                                        transition:
                                            'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-15px)',
                                            borderColor: 'primary.main',
                                            boxShadow: isDarkMode
                                                ? `0 30px 60px ${alpha('#000', 0.8)}`
                                                : `0 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
                                        },
                                    }}
                                >
                                    {/* Imagen y Nombre del Local */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: 280,
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={images[index]}
                                            alt={loc.name}
                                            sx={{
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                p: 3,
                                                background:
                                                    'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                color="primary"
                                                sx={{
                                                    fontWeight: 800,
                                                    letterSpacing: 1.5,
                                                }}
                                            >
                                                {loc.name.toUpperCase()}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Información dinámica del JSON */}
                                    <CardContent
                                        sx={{
                                            p: 4,
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Stack spacing={3} sx={{ mb: 4 }}>
                                            <Detail
                                                icon={<PlaceIcon />}
                                                label="Dirección"
                                                value={loc.address}
                                            />
                                            <Detail
                                                icon={<PhoneIcon />}
                                                label="Teléfono / WhatsApp"
                                                value={loc.phone}
                                            />
                                            <Detail
                                                icon={<AccessTimeIcon />}
                                                label="Horarios sugeridos"
                                                value={getScheduleInfo(
                                                    loc.schedule
                                                )}
                                            />
                                        </Stack>

                                        {/* Botón */}
                                        <Box sx={{ mt: 'auto' }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<RoomIcon />}
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                                                target="_blank"
                                                sx={{
                                                    width: 'fit-content',
                                                    px: 3,
                                                    py: 1.2,
                                                    fontWeight: 800,
                                                    color: 'primary.main',
                                                    borderColor: alpha(
                                                        theme.palette.primary
                                                            .main,
                                                        0.5
                                                    ),
                                                    borderRadius: '8px',
                                                    fontSize: '0.8rem',
                                                    '&:hover': {
                                                        bgcolor: 'primary.main',
                                                        color: '#fff',
                                                        borderColor:
                                                            'primary.main',
                                                    },
                                                }}
                                            >
                                                VER EN MAPA
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </MotionBox>
                        ))}
                    </Box>
                </Container>
            </Box>
        </SectionContainer>
    );
};

// Componente Interno de Detalle
const Detail = ({ icon, label, value }) => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ color: 'primary.main', mt: 0.3 }}>
            {React.cloneElement(icon, { sx: { fontSize: 24 } })}
        </Box>
        <Box>
            <Typography
                variant="caption"
                color="primary"
                sx={{
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    display: 'block',
                    mb: 0.3,
                    letterSpacing: 1.2,
                }}
            >
                {label}:
            </Typography>
            <Typography
                variant="body2"
                sx={{ fontWeight: 600, opacity: 1, lineHeight: 1.5 }}
            >
                {value}
            </Typography>
        </Box>
    </Box>
);

export default Locations;

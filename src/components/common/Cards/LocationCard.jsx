import React from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
    Card,
    CardMedia,
    CardContent,
    alpha,
    useTheme,
    Skeleton,
} from '@mui/material';
import { motion } from 'framer-motion';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import { fadeInUpLeft, fadeInUpRight } from '@/theme/animations';

const MotionBox = motion.create(Box);

const Detail = ({ icon, label, value, loading }) => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ color: 'primary.main', mt: 0.3 }} aria-hidden="true">
            {loading ? (
                <Skeleton variant="circular" width={24} height={24} />
            ) : (
                React.cloneElement(icon, { sx: { fontSize: 24 } })
            )}
        </Box>
        <Box sx={{ width: '100%' }}>
            <Typography
                variant="caption"
                sx={{
                    color: 'primary.dark',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    display: 'block',
                    mb: 0.2,
                    letterSpacing: 1,
                }}
            >
                {label}:
            </Typography>
            {loading ? (
                <Skeleton variant="text" width="80%" height={20} />
            ) : (
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 600,
                        opacity: 1,
                        color: 'text.primary',
                        lineHeight: 1.5,
                    }}
                >
                    {value}
                </Typography>
            )}
        </Box>
    </Box>
);

const LocationCard = ({ loc, index, image, loading = false }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // Lógica de horarios
    const getScheduleInfo = (schedule) => {
        if (!schedule) return 'Consultar horarios';
        const days = Object.keys(schedule);
        if (!days.length) return '';
        const allHours = Object.values(schedule).flat().sort();
        return `${days[0]} a ${days[days.length - 1]}: ${allHours[0]} - ${allHours[allHours.length - 1]}`;
    };

    // ESTADO DE CARGA
    if (loading) {
        return (
            <Box
                sx={{
                    flex: 1,
                    minWidth: { xs: '100%', md: 350 },
                    height: '100%',
                }}
            >
                <Card
                    sx={{
                        height: '100%',
                        borderRadius: '20px',
                        bgcolor: alpha(theme.palette.background.paper, 0.4),
                        border: '1px solid',
                        borderColor: alpha(theme.palette.divider, 0.1),
                    }}
                >
                    <Skeleton
                        variant="rectangular"
                        height={250}
                        animation="wave"
                    />
                    <CardContent sx={{ p: 4 }}>
                        <Skeleton
                            variant="text"
                            width="60%"
                            height={30}
                            sx={{ mb: 2 }}
                        />
                        <Stack spacing={2.5}>
                            <Skeleton variant="text" width="90%" />
                            <Skeleton variant="text" width="80%" />
                            <Skeleton variant="text" width="70%" />
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        );
    }

    // Si no hay data y no está cargando
    if (!loc) return null;

    return (
        <MotionBox
            component="article"
            variants={index === 0 ? fadeInUpLeft : fadeInUpRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            sx={{ flex: 1, minWidth: { xs: '100%', md: 350 }, display: 'flex' }}
        >
            <Card
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: isDarkMode
                        ? alpha('#1A1A18', 0.85)
                        : alpha('#FFFFFF', 0.8),
                    backdropFilter: 'blur(16px) saturate(1.8)',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: alpha(
                        theme.palette.primary.main,
                        isDarkMode ? 0.25 : 0.4
                    ),
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: { md: 'translateY(-15px)' },
                        borderColor: 'primary.main',
                        boxShadow: isDarkMode
                            ? `0 30px 60px ${alpha('#000', 0.8)}`
                            : `0 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        height: 220,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={image}
                        alt={`Local de ${loc.name}`}
                        sx={{ height: '100%', objectFit: 'cover' }}
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
                            component="h3"
                            sx={{ fontWeight: 800, letterSpacing: 1.5 }}
                        >
                            {loc.name.toUpperCase()}
                        </Typography>
                    </Box>
                </Box>

                <CardContent
                    sx={{
                        p: { xs: 3, md: 4 },
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Stack spacing={2.5} sx={{ mb: 4 }}>
                        <Detail
                            icon={<PlaceIcon />}
                            label="Dirección"
                            value={loc.address}
                            loading={false}
                        />
                        <Detail
                            icon={<PhoneIcon />}
                            label="Teléfono / WhatsApp"
                            value={loc.phone}
                            loading={false}
                        />
                        <Detail
                            icon={<AccessTimeIcon />}
                            label="Horarios"
                            value={getScheduleInfo(loc.schedule)}
                            loading={false}
                        />
                    </Stack>

                    <Box sx={{ mt: 'auto' }}>
                        <Button
                            variant="outlined"
                            startIcon={<RoomIcon />}
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                            target="_blank"
                            rel="noopener"
                            aria-label={`Ver ubicación de ${loc.name} en Google Maps`}
                            sx={{
                                width: 'fit-content',
                                px: 3,
                                py: 1.5,
                                fontWeight: 800,
                                color: 'primary.main',
                                borderColor: alpha(
                                    theme.palette.primary.main,
                                    0.5
                                ),
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                '&:hover': {
                                    bgcolor: 'primary.main',
                                    color: '#fff',
                                    borderColor: 'primary.main',
                                },
                            }}
                        >
                            VER EN MAPA
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </MotionBox>
    );
};

export default LocationCard;

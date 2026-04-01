import { Paper, Typography, Box, Skeleton, alpha } from '@mui/material';
import { motion } from 'motion/react';
import { fadeInUpLeft } from '@/theme/animations';

const MotionPaper = motion.create(Paper);

const ServiceCard = ({ item, loading = false }) => {
    const title = item?.title || '';
    const description = item?.description || '';
    const image = item?.image || '';

    const cardStyles = {
        background: (theme) => theme.palette.background.paper,
        p: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    };

    // --- ESTADO CARGANDO (SKELETON) ---
    if (loading) {
        return (
            <Paper elevation={0} sx={cardStyles}>
                {/* Esqueleto de la Imagen */}
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={220}
                    animation="wave"
                />

                {/* Esqueleto del Contenido */}
                <Box sx={{ p: '1rem' }}>
                    <Skeleton
                        variant="text"
                        width="70%"
                        height={32}
                        sx={{ mb: 2 }}
                        animation="wave"
                    />

                    {/* Descripción (2 líneas) */}
                    <Skeleton variant="text" width="100%" animation="wave" />
                    <Skeleton variant="text" width="85%" animation="wave" />
                </Box>
            </Paper>
        );
    }

    return (
        <MotionPaper
            variants={fadeInUpLeft}
            elevation={0}
            component="article"
            sx={{
                ...cardStyles,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    borderColor: 'primary.dark',
                    boxShadow: (theme) =>
                        `0 20px 40px ${alpha(theme.palette.common.black, 0.15)}`,
                },
            }}
        >
            <Box
                component="img"
                src={image}
                alt={`Servicio de ${title}`}
                sx={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                }}
            />
            <Box
                sx={{
                    p: 3,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 800,
                        mb: 1.5,
                        textTransform: 'uppercase',
                        fontSize: '1.1rem',
                        color: 'text.primary',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                >
                    {description}
                </Typography>
            </Box>
        </MotionPaper>
    );
};

export default ServiceCard;

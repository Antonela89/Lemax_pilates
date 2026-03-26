import { Paper, Typography, Box, Container, Skeleton } from '@mui/material';
import { motion } from 'motion/react';
import { fadeInUpLeft } from '@/theme/animations';

const MotionPaper = motion.create(Paper);

const ServiceCard = ({ item, isLoading = false }) => {
    const { title, description, image } = item;

    const cardStyles = {
        background: 'background.paper',
        p: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
    };

    // --- ESTADO CARGANDO (SKELETON) ---
    if (isLoading) {
        return (
            <Paper elevation={0} sx={cardStyles}>
                {/* Esqueleto de la Imagen */}
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={250}
                    animation="wave"
                />

                {/* Esqueleto del Contenido */}
                <Container sx={{ p: '1rem' }}>
                    {/* Título */}
                    <Skeleton
                        variant="text"
                        width="60%"
                        height={32}
                        sx={{ mb: 1 }}
                    />

                    {/* Descripción (2 líneas) */}
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="85%" />
                </Container>
            </Paper>
        );
    }

    return (
        <MotionPaper
            variants={fadeInUpLeft}
            elevation={0}
            sx={{
                ...cardStyles,
                '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-8px)',
                    transition: 'all 0.3s ease',
                },
            }}
        >
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                }}
            />
            <Container sx={{ p: '1rem' }}>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase' }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Container>
        </MotionPaper>
    );
};

export default ServiceCard;

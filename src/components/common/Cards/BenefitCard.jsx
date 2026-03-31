import { Paper, Typography, Box, Skeleton } from '@mui/material';
import { motion } from 'motion/react';
import {
    AccessibilityNew,
    SelfImprovement,
    Balance,
    FitnessCenter,
    Spa,
    Healing,
    Bolt,
    Air,
    HelpOutline,
} from '@mui/icons-material';
import { fadeInUpLeft } from '@/theme/animations';

const iconMap = {
    AccessibilityNew: AccessibilityNew,
    SelfImprovement: SelfImprovement,
    Balance: Balance,
    FitnessCenter: FitnessCenter,
    Spa: Spa,
    Healing: Healing,
    Bolt: Bolt,
    Air: Air
};

const MotionPaper = motion.create(Paper);

const BenefitCard = ({ item, loading = false }) => {
    const title = item?.title || '';
    const description = item?.description || '';
    const icon = item?.icon || '';

    // Mapeo dinámico del icono
    const IconComponent = iconMap[icon] || HelpOutline;

    const cardStyles = {
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
    };

    // --- ESTADO CARGANDO (SKELETON) ---
    if (loading) {
        return (
            <Paper elevation={0} sx={cardStyles}>
                {/* Esqueleto del Icono */}
                <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    sx={{ mb: 2 }}
                    animation="wave"
                />

                {/* Esqueleto del Título */}
                <Skeleton
                    variant="text"
                    width="60%"
                    height={32}
                    sx={{ mb: 1 }}
                    animation="wave"
                />

                {/* Esqueleto de la Descripción (2 o 3 líneas) */}
                <Skeleton variant="text" width="90%" animation="wave" />
                <Skeleton variant="text" width="70%" animation="wave" />
            </Paper>
        );
    }


    return (
        <MotionPaper
            variants={fadeInUpLeft}
            elevation={0}
            sx={{
                ...cardStyles,
                background: 'transparent',
                position: 'relative',
                zIndex: 3,
                '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-8px)',
                    transition: 'all 0.3s ease',
                },
            }}
        >
            <Box sx={{ color: 'primary.main', mb: 2 }}>
                <IconComponent sx={{ fontSize: 40 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </MotionPaper>
    );
};

export default BenefitCard;

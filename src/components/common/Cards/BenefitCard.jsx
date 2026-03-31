import { Paper, Typography, Box, Skeleton, alpha } from '@mui/material';
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

const BenefitCard = ({ item, isLoading = false }) => {
    const { title, description, icon } = item || {};
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
    if (isLoading) {
        return (
            <Paper elevation={0} sx={cardStyles}>
                <Skeleton variant="circular" width={48} height={48} sx={{ mb: 2 }} />
                <Skeleton variant="text" width="70%" height={28} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="60%" />
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
                background: 'transparent',
                position: 'relative',
                zIndex: 3,
                '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`
                },
            }}
        >
            <Box sx={{ color: 'primary.main', mb: 2 }}>
                <IconComponent sx={{ fontSize: 40 }}  aria-hidden="true"  />
            </Box>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {description}
            </Typography>
        </MotionPaper>
    );
};

export default BenefitCard;

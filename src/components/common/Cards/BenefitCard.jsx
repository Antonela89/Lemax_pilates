import { Paper, Typography, Box } from '@mui/material';
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

const BenefitCard = ({ item }) => {
    const { title, description, icon } = item;
    // Mapeo dinámico del icono
    const IconComponent = iconMap[icon] || HelpOutline;

    return (
        <MotionPaper
            variants={fadeInUpLeft}
            elevation={0}
            sx={{
                background: 'transparent',
                position: 'relative',
                zIndex: 3,
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
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

import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'motion/react';
import * as Icons from '@mui/icons-material';
import { fadeInUpLeft } from '@/theme/animations';

const MotionPaper = motion(Paper);

const BenefitCard = ({ title, description, iconName }) => {
    // Mapeo dinámico del icono
    const IconComponent = Icons[iconName] || Icons.HelpOutline;

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

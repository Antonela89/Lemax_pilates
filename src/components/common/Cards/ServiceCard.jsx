import { Paper, Typography, Box, Container } from '@mui/material';
import { motion } from 'motion/react';
import { fadeInUpLeft } from '@/theme/animations';

const MotionPaper = motion.create(Paper);

const ServiceCard = ({ item }) => {
    const { title, description, image } = item;

    return (
        <MotionPaper
            variants={fadeInUpLeft}
            elevation={0}
            sx={{
                background: 'background.paper',
                p: 0,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 1,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
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
            <Container sx={{p: "1rem"}}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase' }}>
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

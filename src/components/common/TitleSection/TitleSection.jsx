import { Box, Typography } from '@mui/material';
import { motion } from 'motion/react';

const MotionBox = motion.create(Box);

const TitleSection = ({
    textOverline,
    colorOverline = 'primary.dark',
    texth2,
    animation,
    id,
}) => {
    return (
        <MotionBox
            id={id}
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            sx={{
                textAlign: 'center',
                mb: { xs: 4, sm: 6, md: 8 },
                px: 2,
            }}
        >
            <Typography
                variant="overline"
                color={colorOverline}
                sx={{
                    fontWeight: 800,
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    letterSpacing: { xs: 2, md: 4 },
                    textTransform: 'uppercase',
                    display: 'block',
                    lineHeight: 1.5,
                }}
            >
                {textOverline}
            </Typography>

            <Typography
                variant="h2"
                component="h2"
                sx={{
                    mt: { xs: 0.5, md: 1.5 },
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: {
                        xs: '1.6rem',
                        sm: '2rem',
                        md: '2.8rem',
                        lg: '3.2rem',
                    },
                    lineHeight: 1.1,
                    maxWidth: '900px',
                    mx: 'auto',
                    color: 'text.primary',
                }}
            >
                {texth2}
            </Typography>
        </MotionBox>
    );
};

export default TitleSection;

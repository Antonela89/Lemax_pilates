import { Box, Typography } from '@mui/material';
import { motion } from 'motion/react';

const MotionBox = motion(Box);

const TitleSection = ({ textOverline, colorOverline = "primary", texth2, animation}) => {
    return (
        <MotionBox
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
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                    letterSpacing: { xs: 3, md: 5 }, 
                    textTransform: 'uppercase',
                    display: 'block',
                }}
            >
                {textOverline}
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    mt: { xs: 1, md: 2 },
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: {
                        xs: '1.75rem', 
                        sm: '2.25rem', 
                        md: '3rem', 
                        lg: '3.5rem', 
                    },
                    lineHeight: { xs: 1.2, md: 1.1 },
                    maxWidth: '800px', 
                    mx: 'auto', 
                }}
            >
                {texth2}
            </Typography>
        </MotionBox>
    );
};

export default TitleSection;

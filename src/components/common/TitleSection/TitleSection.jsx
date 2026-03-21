import { Box, Typography } from '@mui/material';
import { motion } from 'motion/react';

const MotionBox = motion(Box);

const TitleSection = ({ textOverline, colorOverline = "primary", texth2, animation}) => {
    return (
        <MotionBox
            variants={animation}
            sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
            <Typography
                variant="overline"
                color={colorOverline}
                sx={{
                    fontWeight: 'bold',
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                }}
            >
                {textOverline}
            </Typography>
            <Typography
                variant="h2"
                sx={{ mt: 1, fontWeight: 700, textTransform: 'uppercase' }}
            >
                {texth2}
            </Typography>
        </MotionBox>
    );
};

export default TitleSection;

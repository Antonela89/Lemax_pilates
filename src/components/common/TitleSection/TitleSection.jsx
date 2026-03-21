import { Box, Typography } from '@mui/material';
import { motion } from 'motion/react';

const MotionBox = motion(Box);

const TitleSection = ({ overline, h2, animation}) => {
    return (
        <MotionBox
            variants={animation}
            sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
            <Typography
                variant="overline"
                color="primary"
                sx={{
                    fontWeight: 'bold',
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                }}
            >
                {overline}
            </Typography>
            <Typography
                variant="h2"
                sx={{ mt: 1, fontWeight: 700, textTransform: 'uppercase' }}
            >
                {h2}
            </Typography>
        </MotionBox>
    );
};

export default TitleSection;

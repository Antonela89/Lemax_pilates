import { Box } from '@mui/material';
import { motion } from 'motion/react';

const SectionContainer = ({ children, background, animation }) => {

    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={animation}
            sx={{
                pb: { xs: 8, md: 12 },
                bgcolor: `background.${background}`,
            }}
        >
            {children}
        </Box>
    );
};

export default SectionContainer;

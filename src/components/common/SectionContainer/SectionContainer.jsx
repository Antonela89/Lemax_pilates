import { Box } from '@mui/material';
import { motion } from 'motion/react';

const SectionContainer = ({ children, background, animation, id }) => {
    return (
        <Box
            id={id}
            component="section"
            sx={{
                width: '100%',
                bgcolor: background || 'background.default',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                component={motion.div}
                variants={animation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default SectionContainer;

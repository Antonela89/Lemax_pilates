import { Box } from '@mui/material';
import { motion } from 'motion/react';

const SectionContainer = ({ children, background, animation, id }) => {

    return (
        <Box
            id={id}
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={animation}
            sx={{
                bgcolor: background,
            }}
        >
            {children}
        </Box>
    );
};

export default SectionContainer;

import { Box, useMediaQuery } from '@mui/material';
import { motion } from 'motion/react';

const SectionContainer = ({ children, background, animation, id, sx = {} }) => {
    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    );

    const titleId = id ? `${id}-title` : undefined;
    return (
        <Box
            id={id}
            component="section"
            aria-labelledby={titleId}
            sx={{
                width: '100%',
                bgcolor: background || 'background.default',
                position: 'relative',
                overflow: 'hidden',
                ...sx,
            }}
        >
            {animation && !prefersReducedMotion ? (
                <Box
                    component={motion.div}
                    variants={animation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {children}
                </Box>
            ) : (
                children
            )}
        </Box>
    );
};

export default SectionContainer;

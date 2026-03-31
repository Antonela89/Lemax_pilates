import { Box, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';

const AutoSlider = ({
    items,
    renderItem,
    itemsToShow = 3,
    interval = 5000,
    gap = 4,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    );

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    useEffect(() => {
        if (isPaused || prefersReducedMotion || items.length <= itemsToShow)
            return;

        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [
        isPaused,
        prefersReducedMotion,
        items.length,
        itemsToShow,
        interval,
        nextSlide,
    ]);

    if (!items || items.length === 0) return null;

    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleItems.push(items[(currentIndex + i) % items.length]);
    }

    return (
        <Box
            sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Instructores de Pilates"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    transition={{
                        duration: prefersReducedMotion ? 0.1 : 0.6,
                        ease: 'easeInOut',
                    }}
                    style={{
                        display: 'flex',
                        gap: `${gap * 8}px`,
                        justifyContent: 'center',
                        padding: '1rem',
                    }}
                >
                    {visibleItems.map((item, idx) => (
                        <Box
                            key={`${item.id}-${idx}`}
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                width: itemsToShow === 1 ? '100%' : 'auto',
                            }}
                        >
                            {renderItem(item)}
                        </Box>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Indicador visual para ciegos (Invisible pero presente) */}
            <Box
                aria-live="polite"
                aria-atomic="true"
                sx={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: '0',
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    border: '0',
                }}
            >
                {`Mostrando instructor ${currentIndex + 1} de ${items.length}`}
            </Box>
        </Box>
    );
};

export default AutoSlider;

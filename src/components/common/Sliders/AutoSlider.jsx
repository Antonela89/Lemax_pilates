import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const AutoSlider = ({
    items,
    renderItem,
    itemsToShow = 3,
    interval = 4500,
    gap = 4,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleItems.push(items[(currentIndex + i) % items.length]);
    }

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    style={{
                        display: 'flex',
                        gap: `${gap * 8}px`, 
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                >
                    {visibleItems.map((item, idx) => (
                        <Box
                            key={`${item.id}-${idx}`}
                            sx={{ flex: 1, minWidth: 0 }}
                        >
                            {renderItem(item)}
                        </Box>
                    ))}
                </motion.div>
            </AnimatePresence>
        </Box>
    );
};

export default AutoSlider;

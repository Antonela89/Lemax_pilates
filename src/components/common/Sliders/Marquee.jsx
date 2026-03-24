import { Box } from '@mui/material';
import { keyframes } from '@mui/system';
import { useMemo } from 'react';

const scrollInfinite = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

const Marquee = ({
    items = [],
    renderItem,
    speed = '80s',
    mobileSpeed = '40s',
    pauseOnHover = true,
    itemWidth = { xs: '300px', md: '380px' },
}) => {
    // Duplicar los items para el efecto infinito
    const doubledItems = useMemo(() => [...items, ...items], [items]);

    if (items.length === 0) return null;

    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                // Máscara para desvanecer bordes 
                maskImage:
                    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: 'max-content',
                    animation: `${scrollInfinite} ${speed} linear infinite`,
                    '&:hover': {
                        animationPlayState: pauseOnHover ? 'paused' : 'running',
                    },
                    '@media (max-width: 600px)': {
                        animationDuration: mobileSpeed,
                    },
                }}
            >
                {doubledItems.map((item, idx) => (
                    <Box
                        key={`${item.id || idx}-${idx}`}
                        sx={{
                            width: itemWidth,
                            p: 2,
                            flexShrink: 0,
                        }}
                    >
                        {renderItem(item)}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Marquee;

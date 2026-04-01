import { Box, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { fadeInUpLeft } from '@/theme/animations';

const TripleGlowWave = ({ colorTop, colorBottom, reverse = false }) => {
    const theme = useTheme();

    const bgTop = colorTop || theme.palette.background.default;
    const bgBottom = colorBottom || theme.palette.background.paper;
    const goldMain = theme.palette.primary.main;

    // Configuración de la transición común para sincronizar, pero con desfases
    const baseTransition = (delay) => ({
        duration: 2.5,
        ease: [0.4, 0, 0.2, 1],
        delay: delay,
    });

    return (
        <Box
            component={motion.div}
            variants={fadeInUpLeft}
            sx={{
                width: '100%',
                height: 160,
                position: 'relative',
                background: `linear-gradient(to bottom, ${bgTop} 0%, ${bgBottom} 100%)`,
                overflow: 'hidden',
                my: '-1px',
                py: { xs: 2, md: 4 },
            }}
        >
            <svg
                viewBox="0 0 1440 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    transform: reverse ? 'scaleX(-1)' : 'none',
                }}
            >
                {/* --- ONDA 1: EL ECO (Muy sutil y fina) --- */}
                <motion.path
                    d="M0,80 C320,160 480,-20 720,80 C960,180 1120,0 1440,80"
                    stroke={goldMain}
                    strokeWidth="1"
                    opacity="0.15"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.15 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={baseTransition(0.4)}
                />

                {/* --- ONDA 2: APOYO (Grosor medio) --- */}
                <motion.path
                    d="M0,60 C240,140 540,20 720,100 C900,180 1200,20 1440,60"
                    stroke={goldMain}
                    strokeWidth="1.5"
                    opacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={baseTransition(0.2)}
                />

                {/* --- ONDA 3: PRINCIPAL (La que brilla) --- */}
                <motion.path
                    d="M0,100 C360,20 600,180 720,100 C840,20 1080,180 1440,100"
                    stroke={goldMain}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={baseTransition(0)}
                    style={{
                        filter: `drop-shadow(0px 0px 10px ${goldMain}99)`,
                    }}
                />
            </svg>
        </Box>
    );
};

export default TripleGlowWave;

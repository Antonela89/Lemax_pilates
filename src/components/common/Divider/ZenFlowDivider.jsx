import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'motion/react';

const ZenWaveDivider = ({ colorTop, colorBottom }) => {
    const theme = useTheme();

    // Colores por defecto si no se envían props
    const bgTop = colorTop || theme.palette.background.default;
    const bgBottom = colorBottom || theme.palette.background.paper;
    const goldMain = theme.palette.primary.main;

    const transition = (delay) => ({
        duration: 3,
        ease: [0.4, 0, 0.2, 1],
        delay: delay,
    });

    return (
        <Box
            sx={{
                width: '100%',
                // El fondo del Box es el color de ARRIBA
                bgcolor: bgTop,
                position: 'relative',
                lineHeight: 0,
                mt: '-1px', // Solapamiento mínimo para evitar rendijas
            }}
        >
            <svg
                viewBox="0 0 1440 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                }}
            >
                {/* 
                  1. FORMA DE FONDO (SHAPE FILL)
                  Esta es la clave: el color de ABAJO tiene forma de onda 
                  para que no se vea una línea recta.
                */}
                <path
                    d="M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z"
                    fill={bgBottom}
                />

                {/* 2. LÍNEA DE FLUJO SUTIL */}
                <motion.path
                    d="M0,40 C480,120 960,0 1440,80"
                    stroke={goldMain}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={transition(0)}
                    style={{
                        filter: `drop-shadow(0px 0px 8px ${goldMain}66)`,
                    }}
                />

                {/* 3. LÍNEA DE APOYO (ECO) */}
                <motion.path
                    d="M0,60 C360,-10 1080,130 1440,60"
                    stroke={goldMain}
                    strokeWidth="0.5"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={transition(0.4)}
                />
            </svg>
        </Box>
    );
};

export default ZenWaveDivider;
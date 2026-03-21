import { Box } from '@mui/material';
import { motion } from 'motion/react';

const GlowWave = ({ background }) => {
    return (
        <Box sx={{ width: '100%', overflow: 'hidden', lineSize: 0, my: -1 }}>
            <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', width: '100%', height: 'auto' }}
            >
                <motion.path
                    // Esta es la forma de la onda (ajustable)
                    d="M0,64 C240,128 480,0 720,64 C960,128 1200,0 1440,64"
                    stroke="#C5A069"
                    strokeWidth="2"
                    strokeLinecap="round"
                    // Animación de dibujo de línea
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                    // Efecto de iluminación (Glow)
                    style={{
                        filter: 'drop-shadow(0px 0px 8px rgba(197, 160, 105, 0.8))',
                        bgcolor: `background.${background}`,
                    }}
                />

                {/* Segunda línea sutil para dar profundidad */}
                <motion.path
                    d="M0,80 C240,144 480,16 720,80 C960,144 1200,16 1440,80"
                    stroke="#C5A069"
                    strokeWidth="1"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 2.5,
                        ease: 'easeInOut',
                        delay: 0.2,
                    }}
                />
            </svg>
        </Box>
    );
};

export default GlowWave;

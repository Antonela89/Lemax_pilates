import { Box } from '@mui/material';
import { motion } from 'motion/react';

const LayeredWaves = ({ fill1, fill2 }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '120px',
                mt: -15,
                zIndex: 1,
                overflow: 'visible',
            }}
        >
            <svg
                viewBox="0 0 1440 320"
                style={{
                    position: 'absolute',
                    bottom: '-1px',
                    width: '100%',
                    display: 'block',
                    shapeRendering: 'auto',
                    marginTop: '-1px',
                    marginBottom: '-1px',
                    transform: 'translateY(1px)',
                }}
            >

                {/* Onda de Fondo (Más clara o transparente) */}
                <motion.path
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 0.3 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    fill={fill1}
                    d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
                {/* Onda Principal (Color de la siguiente sección) */}
                <motion.path
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    fill={fill2}
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>
        </Box>
    );
};

export default LayeredWaves;

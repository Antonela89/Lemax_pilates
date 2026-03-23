import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'motion/react';
import { fadeInUpLeft, staggerContainer, imageEntry } from '@/theme/animations';
import heroImg from '@/assets/images/hero/hero.webp';

// Versiones "motion" de los componentes MUI para que acepten sx y variants
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const HeroSection = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    return (
        <Box
            id="inicio"
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' },
                minHeight: '90vh',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                gap: '2rem',
                bgcolor: 'background.default',
            }}
        >
            {/* CONTENEDOR DE IMAGEN */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '350px', md: '100%' },
                    overflow: 'hidden',
                }}
            >
                <MotionBox
                    variants={imageEntry(isDarkMode)}
                    className="motion-img"
                    component="img"
                    src={heroImg}
                    alt="Clase de Pilates Reformer Le Max"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </Box>

            {/* --- LADO DEL TEXTO --- */}
            <MotionBox
                variants={staggerContainer}
                sx={{
                    width: { xs: '100%', md: '40%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="overline"
                    color="primary"
                    sx={{
                        fontWeight: 'bold',
                        letterSpacing: 2,
                        display: 'block',
                    }}
                >
                    CENTRO DE PILATES
                </MotionTypography>
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="h1"
                    sx={{
                        my: 2,
                        fontSize: {
                            xs: '1.5rem',
                            md: '2.5rem',
                            xl: '3rem',
                        },
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        lineHeight: 1.1,
                    }}
                >
                    Transforma tu cuerpo y mente
                </MotionTypography>
                <MotionTypography variants={fadeInUpLeft} variant="subtitle1">
                    En LeMax, combinamos técnicas de Pilates clásico y
                    contemporáneo para ofrecerte una experiencia de
                    entrenamiento única y personalizada.
                </MotionTypography>
                <MotionButton
                    variants={fadeInUpLeft}
                    variant="contained"
                    component="a"
                    href="#contacto"
                    sx={{
                        width: { xs: '90%', sm: '70%', md: '50%' },
                        py: 1.5,
                    }}
                >
                    Reservar Clase
                </MotionButton>
            </MotionBox>
        </Box>
    );
};

export default HeroSection;

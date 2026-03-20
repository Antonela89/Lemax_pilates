import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'motion/react';
import {
    fadeInUpLeft,
    fadeInUpRight,
    staggerContainer,
    imageFocusIn,
} from '@/theme/animation';
import heroImg from '@/assets/images/hero/hero.webp';

// Versiones "motion" de los componentes MUI para que acepten sx y variants
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionStack = motion(Stack);
const MotionButton = motion(Button);

const HeroSection = () => {
    return (
        <Box
            component="section"
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
            <MotionBox
                variants={fadeInUpRight}
                initial="hidden"
                animate="visible"
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '350px', md: '100%' },
                }}
            >
                <MotionBox
                    variants={imageFocusIn}
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
            </MotionBox>

            {/* --- LADO DEL TEXTO --- */}
            <MotionBox
                initial="hidden"
                animate="visible"
                sx={{
                    width: { xs: '100%', md: '40%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <MotionStack
                    variants={staggerContainer}
                    spacing={1}
                    sx={{ maxWidth: '700px' }}
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
                    <MotionTypography
                        variants={fadeInUpLeft}
                        variant="subtitle1"
                    >
                        En LeMax, combinamos técnicas de Pilates clásico y
                        contemporáneo para ofrecerte una experiencia de
                        entrenamiento única y personalizada.
                    </MotionTypography>
                    <MotionButton
                        variants={fadeInUpLeft}
                        variant="contained"
                        sx={{ width: { xs: '100%', sm: '80%', md: '50%' } }}
                    >
                        Reservar Clase
                    </MotionButton>
                </MotionStack>
            </MotionBox>
        </Box>
    );
};

export default HeroSection;

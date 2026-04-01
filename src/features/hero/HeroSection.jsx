import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button, alpha, useMediaQuery } from '@mui/material';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import { motion } from 'motion/react';
import { fadeInUpLeft, staggerContainer, imageEntry } from '@/theme/animations';
import heroImg from '@/assets/images/hero/hero-lemax.webp';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);

const HeroSection = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    );

    const bgSecondary = theme.palette.text.secondary;
    const bgBasic = theme.palette.primary.main;

    const navHeight = { xs: '64px', md: '80px' };

    return (
        <SectionContainer
            id="inicio"
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                minHeight: '100dvh',
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'center',
                overflow: 'hidden',
                mt: navHeight,
                pb: { xs: 6, sm: 12, md: 18, lg: 24 },
            }}
        >
            {/* CONTENEDOR DE IMAGEN CON OVERLAY DINÁMICO */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: isDarkMode
                            ? 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.4))'
                            : 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
                    },
                }}
            >
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    variants={
                        prefersReducedMotion ? {} : imageEntry(isDarkMode)
                    }
                    className="motion-img"
                    component="img"
                    src={heroImg}
                    alt="Logo de Le Max Centro de Pilates grabado en una cama de Pilates Reformer con otras máquinas de fondo desenfocadas"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: { xs: '50% 80%', md: '80% 85%' },
                    }}
                />
            </Box>

            {/* --- BLOQUE DE TEXTO (GLASSMORPHISM) --- */}
            <MotionBox
                initial="hidden"
                whileInView="visible"
                variants={
                    prefersReducedMotion
                        ? { visible: { opacity: 1 } }
                        : staggerContainer
                }
                sx={{
                    width: { xs: '92%', md: '55%', lg: '45%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                    position: 'relative',
                    zIndex: 10,
                    ml: { xs: 'auto', md: '6%', lg: '10%' },
                    mr: { xs: 'auto', md: 0 },
                    p: { xs: 3, sm: 4, md: 6 },
                    borderRadius: '2rem',
                    backgroundColor: isDarkMode
                        ? alpha(theme.palette.background.default, 0.9)
                        : alpha('#ffffff', 0.7),
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                }}
            >
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="overline"
                    component="span"
                    sx={{
                        color: 'primary.dark',
                        fontWeight: 800,
                        letterSpacing: { xs: 2, md: 4 },
                        fontSize: { xs: '0.7rem', md: '0.9rem' },
                        display: 'block',
                    }}
                >
                    CENTRO DE PILATES
                </MotionTypography>
                <MotionTypography
                    id="hero-title"
                    variants={fadeInUpLeft}
                    variant="h1"
                    sx={{
                        fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        lineHeight: 1.1,
                        textShadow: isDarkMode
                            ? 'none'
                            : '0px 4px 10px rgba(0,0,0,0.05)',
                    }}
                >
                    Transforma tu <br />
                    <Box
                        component="span"
                        aria-label="Cuerpo y mente"
                        sx={{ color: 'primary.main' }}
                    >
                        cuerpo y mente
                    </Box>
                </MotionTypography>
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="body1"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: { xs: '1rem', md: '1.15rem' },
                        maxWidth: '450px',
                        mb: 3,
                        lineHeight: 1.6,
                    }}
                >
                    Clases personalizadas de Pilates Reformer y Clínico en
                    Rafaela para todos los niveles.
                </MotionTypography>
                <MotionButton
                    variants={fadeInUpLeft}
                    variant="contained"
                    component="a"
                    href="#contacto"
                    aria-label="Reservar una clase de Pilates ahora"
                    sx={{
                        px: { xs: 4, md: 6 },
                        py: 1.8,
                        fontWeight: 800,
                        borderRadius: '50px',
                        width: { xs: '100%', sm: 'auto' },
                        fontSize: '1.1rem',
                        boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
                        '&:hover': {
                            boxShadow: `0 15px 30px ${alpha(theme.palette.primary.main, 0.5)}`,
                        },
                    }}
                >
                    Reservar Clase
                </MotionButton>
            </MotionBox>

            {/* Ondas decorativas al final */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    zIndex: 5,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        zIndex: 11,
                    }}
                >
                    <LayeredWaves fill1={bgSecondary} fill2={bgBasic} />
                </Box>
            </Box>
        </SectionContainer>
    );
};

export default HeroSection;

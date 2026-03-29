import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button, alpha } from '@mui/material';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import { motion } from 'motion/react';
import { fadeInUpLeft, staggerContainer, imageEntry } from '@/theme/animations';
import heroImg from '@/assets/images/hero/hero.webp';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);

const HeroSection = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const bgSecondary = theme.palette.text.secondary;
    const bgBasic = theme.palette.primary.main;

    return (
        <SectionContainer
            id="inicio"
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100dvh',
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'center',
                overflow: 'hidden',
                mt: '80px',
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
                    },
                }}
            >
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    variants={imageEntry(isDarkMode)}
                    className="motion-img"
                    component="img"
                    src={heroImg}
                    alt="Clase de Pilates Reformer Le Max"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: { xs: 'center', md: '80% center' },
                    }}
                />
            </Box>

            {/* --- BLOQUE DE TEXTO (GLASSMORPHISM) --- */}
            <MotionBox
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                sx={{
                    width: { xs: '92%', md: '55%', lg: '45%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1, md: 2 },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                    position: 'relative',
                    zIndex: 10,
                    ml: { xs: 'auto', md: '8%', lg: '12%' },
                    mr: { xs: 'auto', md: 0 },
                    p: { xs: 3, md: 6 },
                    borderRadius: '32px',
                    backgroundColor: isDarkMode
                        ? alpha(theme.palette.background.default, 0.85) 
                        : alpha('#ffffff', 0.7),
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
            >
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="overline"
                    sx={{
                        color: 'primary.main',
                        fontWeight: 800,
                        letterSpacing: { xs: 2, md: 4 },
                        fontSize: { xs: '0.7rem', md: '0.9rem' },
                        display: 'block',
                    }}
                >
                    CENTRO DE PILATES
                </MotionTypography>
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="h1"
                    sx={{
                        fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        textShadow: isDarkMode
                            ? 'none'
                            : '0px 4px 10px rgba(0,0,0,0.05)',
                    }}
                >
                    Transforma tu <br />
                    <Box component="span" sx={{ color: 'primary.main' }}>
                        cuerpo y mente
                    </Box>
                </MotionTypography>
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        maxWidth: '450px',
                        mb: 2,
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
                    sx={{
                        px: { xs: 4, md: 6 },
                        py: 1.8,
                        fontWeight: 800,
                        borderRadius: '50px',
                        width: { xs: '100%', sm: 'auto' },
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
                <LayeredWaves fill1={bgSecondary} fill2={bgBasic} />
            </Box>
        </SectionContainer>
    );
};

export default HeroSection;

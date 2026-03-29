import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button, alpha } from '@mui/material';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import { motion } from 'motion/react';
import { fadeInUpLeft, staggerContainer, imageEntry } from '@/theme/animations';
import heroImg from '@/assets/images/hero/hero.webp';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';

// Versiones "motion" de los componentes MUI para que acepten sx y variants
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
                display: 'flex',
                flexDirection: { xs: 'column' },
                minHeight: '90vh',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                mt: { xs: '65px', md: '80px' },
            }}
        >
            {/* CONTENEDOR DE IMAGEN CON OVERLAY */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100dvh',
                    overflow: 'hidden',
                    // CAPA DE GRADIENTE PARA CONTRASTE
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: isDarkMode
                            ? 'linear-gradient(to right, rgba(26, 26, 24, 0.8) 0%, rgba(26, 26, 24, 0.4) 50%, transparent 100%)'
                            : 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 100%)',
                        zIndex: 1,
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
                        objectPosition: 'center',
                    }}
                />
            </Box>

            {/* --- LADO DEL TEXTO (ESTILO GLASSMORPHISM) --- */}
            <MotionBox
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                sx={{
                    width: { xs: '90%', md: '50%', lg: '40%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                    p: { xs: 1, md: 3 },
                    position: 'absolute',
                    left: { xs: '1%', md: '2.5%', lg: '4%' },
                    top: { xs: '1.5%', md: '3%', lg: '6%' },
                    zIndex: 10,
                    // EFECTO DE VIDRIO PARA RESALTAR
                    borderRadius: '1rem',
                    backgroundColor: alpha(
                        theme.palette.background.default,
                        0.1
                    ),
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
            >
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="overline"
                    sx={{
                        color: 'primary.main', // Usamos el dorado para el overline
                        fontWeight: 800,
                        letterSpacing: 3,
                        display: 'block',
                    }}
                >
                    CENTRO DE PILATES
                </MotionTypography>
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="h1"
                    sx={{
                        my: 1,
                        fontSize: { xs: '2rem', md: '3rem', xl: '3.5rem' },
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        color: 'text.primary',
                        // Sombra de texto sutil para separar de la imagen
                        textShadow: isDarkMode
                            ? 'none'
                            : '0px 2px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    Transforma tu <br />
                    <Box component="span" sx={{ color: 'primary.main' }}>
                        cuerpo y mente
                    </Box>
                </MotionTypography>
                <MotionTypography
                    variants={fadeInUpLeft}
                    variant="subtitle1"
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        maxWidth: '450px',
                    }}
                >
                    En Le Max, combinamos técnicas de Pilates clásico y
                    contemporáneo para ofrecerte una experiencia de
                    entrenamiento única y personalizada.
                </MotionTypography>
                <MotionButton
                    variants={fadeInUpLeft}
                    variant="contained"
                    component="a"
                    href="#contacto"
                    sx={{
                        px: 6,
                        py: 2,
                        fontWeight: 800,
                        borderRadius: '50px',
                        mt: 2,
                        boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                    }}
                >
                    Reservar Clase
                </MotionButton>
            </MotionBox>
            <LayeredWaves fill1={bgSecondary} fill2={bgBasic} />
        </SectionContainer>
    );
};

export default HeroSection;

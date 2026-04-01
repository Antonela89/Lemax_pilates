import {
    Box,
    Container,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'motion/react';
import { keyframes } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Componentes comunes
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';

// Configuración y Animaciones
import { fadeInUpLeft, staggerContainer } from '@/theme/animations';

const MotionButton = motion.create(Button);

// ANIMACIÓN BOTON: Solo afecta a la sombra expansiva
const pulseAura = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const ContactCTA = ({ contact }) => {
    const theme = useTheme();
    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    );
    const GOLD_BG = theme.palette.primary.main;
    const DARK_TEXT = '#2D2926';

    const whatsappNumber =
        contact && contact.length > 0 ? contact[0].whatsapp : '';
    const message = encodeURIComponent(
        '¡Hola! Me gustaría agendar mi clase de prueba en Le Max Pilates.'
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <SectionContainer
            background="background.default"
            id="contacto"
            aria-labelledby="contact-cta-title"
            animation={staggerContainer}
        >
            <Box
                sx={{
                    bgcolor: GOLD_BG,
                    pt: { xs: 8, md: 10 },
                    px: { xs: 2, md: 6 },
                    pb: { xs: 10, md: 14 },
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    color: DARK_TEXT,
                    '& .MuiTypography-root': {
                        color: 'inherit',
                    },
                }}
            >
                <Container maxWidth="lg">
                    <TitleSection
                        id="contact-cta-title"
                        textOverline="ES TU MOMENTO"
                        colorOverline={DARK_TEXT}
                        texth2="COMIENZA TU TRANSFORMACIÓN"
                        animation={fadeInUpLeft}
                    />

                    {/* Frase */}
                    <Box
                        component={motion.div}
                        variants={fadeInUpLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        sx={{
                            mt: -2,
                            mb: 6,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontStyle: 'italic ',
                                fontSize: { xs: '1.15rem', md: '1.4rem' },
                                fontWeight: 500,
                                opacity: 0.95,
                                maxWidth: '700px',
                                lineHeight: 1.6,
                            }}
                        >
                            Agenda hoy tu clase de prueba y descubre cómo
                            Pilates puede cambiar tu vida.
                        </Typography>
                    </Box>

                    {/* BOTÓN WHATSAPP*/}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <MotionButton
                            variants={fadeInUpLeft}
                            variant="contained"
                            startIcon={
                                <WhatsAppIcon sx={{ fontSize: '1.6rem' }} />
                            }
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contactar por WhatsApp para agendar clase de prueba"
                            sx={{
                                bgcolor: DARK_TEXT,
                                color: '#FFFFFF',
                                px: { xs: 4, md: 6 },
                                py: 2,
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                borderRadius: '12px',
                                textTransform: 'none',
                                animation: prefersReducedMotion
                                    ? 'none'
                                    : `${pulseAura} 2.5s infinite ease-in-out`,

                                transition:
                                    'background-color 0.3s ease, transform 0.2s ease',
                                '&:hover': {
                                    bgcolor: '#1a1a18',
                                    animation: 'none',
                                },
                            }}
                            whileHover={{
                                scale: prefersReducedMotion ? 1 : 1.05,
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            WhatsApp
                        </MotionButton>
                    </Box>
                </Container>
            </Box>
        </SectionContainer>
    );
};

export default ContactCTA;

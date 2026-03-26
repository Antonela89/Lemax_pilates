import { Box, Container, Typography, Button, useTheme } from '@mui/material';
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
    const GOLD_BG = theme.palette.primary.main;
    const CREAM_TEXT = theme.palette.text.primary;

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
                    '& .MuiTypography-root': {
                        color: `${CREAM_TEXT} `,
                    },
                }}
            >
                <Container maxWidth="lg">
                    <TitleSection
                        textOverline="ES TU MOMENTO"
                        texth2="COMIENZA TU TRANSFORMACIÓN"
                        animation={fadeInUpLeft}
                    />

                    {/* Frase */}
                    <Box
                        component={motion.div}
                        variants={fadeInUpLeft}
                        sx={{
                            mt: -2,
                            mb: 6,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontStyle: 'italic ',
                                fontSize: { xs: '1.1rem', md: '1.35rem' },
                                fontWeight: 400,
                                opacity: 0.95,
                                maxWidth: '800px',
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
                                <WhatsAppIcon sx={{ fontSize: '1.5rem' }} />
                            }
                            href={whatsappLink}
                            target="_blank"
                            sx={{
                                bgcolor: '#2D2926',
                                color: '#FFFFFF',
                                px: 5,
                                py: 1.8,
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                borderRadius: '10px',
                                textTransform: 'none',

                                animation: `${pulseAura} 2s infinite cubic-bezier(0.4, 0, 0.6, 1)`,

                                transition:
                                    'background-color 0.3s ease, transform 0.2s ease',
                                '&:hover': {
                                    bgcolor: '#1a1a18',
                                    animation: 'none',
                                },
                            }}
                            whileHover={{ scale: 1.05 }}
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

import { Fab, useTheme, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'motion/react';

const MotionFab = motion.create(Fab);

/**
 * QueryButton - Botón flotante de WhatsApp para consultas sobre clases.
 * Aparece en la esquina inferior derecha de la pantalla.
 */
const QueryButton = ({ whatsappNumber = '5493424774718' }) => {
    const theme = useTheme();
    
    // El mensaje solicitado por el usuario
    const message = encodeURIComponent('Hola! queria hacer una consulta sobre las clases');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <Zoom in={true} style={{ transitionDelay: '500ms' }}>
            <MotionFab
                color="primary"
                aria-label="whatsapp-query"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: 'fixed',
                    bottom: { xs: 20, md: 30 },
                    right: { xs: 20, md: 30 },
                    bgcolor: theme.palette.primary.main,
                    color: '#fff',
                    width: { xs: 56, md: 64 },
                    height: { xs: 56, md: 64 },
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    zIndex: 2000,
                    '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                        transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease-in-out',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
            </MotionFab>
        </Zoom>
    );
};

export default QueryButton;

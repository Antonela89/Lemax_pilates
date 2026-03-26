import { useState } from 'react';
import { Fab, useTheme, Zoom, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'motion/react';

const MotionFab = motion.create(Fab);

/**
 * QueryButton - Botón flotante de WhatsApp con menú de guía para consultas.
 * Aparece en la esquina inferior derecha de la pantalla.
 */
const QueryButton = ({ whatsappNumber = '5493424774718' }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const sendWhatsapp = (msg) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        handleClose();
    };

    return (
        <>
            <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <MotionFab
                    color="primary"
                    aria-label="whatsapp-query"
                    onClick={handleOpen}
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

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        mt: -1.5,
                        '& .MuiMenuItem-root': {
                            py: 1.5,
                            px: 2.5,
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.04)',
                            },
                        },
                    },
                }}
            >
                <MenuItem onClick={() => sendWhatsapp("Hola Le Max! Me gustaría consultar los horarios disponibles.")}>
                    <ListItemIcon>
                        <InfoIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Consultar Horarios" />
                </MenuItem>
                
                <MenuItem onClick={() => sendWhatsapp("Hola! Quiero info sobre los servicios de Pilates.")}>
                    <ListItemIcon>
                        <WhatsAppIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Info de Servicios" />
                </MenuItem>

                <MenuItem onClick={() => sendWhatsapp("Hola! Quiero contactar con la Sucursal Córdoba.")}>
                    <ListItemIcon>
                        <LocationOnIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Sucursal Córdoba 429" />
                </MenuItem>

                <MenuItem onClick={() => sendWhatsapp("Hola! Quiero contactar con la Sucursal José Gálvez.")}>
                    <ListItemIcon>
                        <LocationOnIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Sucursal José Gálvez" />
                </MenuItem>
            </Menu>
        </>
    );
};

export default QueryButton;

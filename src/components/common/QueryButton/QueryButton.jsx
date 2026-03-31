import { useState } from 'react';
import {
    Fab,
    useTheme,
    Zoom,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
    alpha,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'motion/react';

const MotionFab = motion.create(Fab);

/**
 * QueryButton - Botón flotante de WhatsApp con menú de guía para consultas.
 * Aparece en la esquina inferior derecha de la pantalla.
 */
const QueryButton = ({
    numGalvez = '5493424774718',
    numCordoba = '5493492289600',
    primaryNumber = '5493424774718',
}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const menuId = 'whatsapp-query-menu';

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const sendWhatsapp = (msg, targetNumber = primaryNumber) => {
        const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener noreferrer');
        handleClose();
    };

    return (
        <>
            <Tooltip title="Consultas por WhatsApp" placement="left" arrow>
                <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                    <MotionFab
                        color="primary"
                        id="whatsapp-fab"
                        aria-label="Abrir opciones de contacto por WhatsApp"
                        aria-controls={open ? menuId : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleOpen}
                        sx={{
                            position: 'fixed',
                            bottom: { xs: 16, md: 30 },
                            right: { xs: 16, md: 30 },
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
            </Tooltip>

            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'whatsapp-fab',
                    role: 'listbox',
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        mt: -1.5,
                        minWidth: '240px',
                        '& .MuiMenuItem-root': {
                            py: 2,
                            px: 3,
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: alpha(
                                    theme.palette.primary.main,
                                    0.08
                                ),
                            },
                        },
                    },
                }}
            >
                <MenuItem
                    onClick={() =>
                        sendWhatsapp(
                            'Hola Le Max! Me gustaría consultar los horarios disponibles.'
                        )
                    }
                >
                    <ListItemIcon>
                        <InfoIcon
                            fontSize="small"
                            sx={{ color: theme.palette.primary.main }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Consultar Horarios" />
                </MenuItem>

                <MenuItem
                    onClick={() =>
                        sendWhatsapp(
                            'Hola! Quiero info sobre los servicios de Pilates.'
                        )
                    }
                >
                    <ListItemIcon>
                        <WhatsAppIcon
                            fontSize="small"
                            sx={{ color: theme.palette.primary.main }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Info de Servicios" />
                </MenuItem>

                <MenuItem
                    onClick={() =>
                        sendWhatsapp(
                            'Hola! Quiero contactar con la Sucursal Córdoba.', numCordoba
                        )
                    }
                >
                    <ListItemIcon>
                        <LocationOnIcon
                            fontSize="small"
                            sx={{ color: theme.palette.primary.main }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Sucursal Córdoba 429" />
                </MenuItem>

                <MenuItem
                    onClick={() =>
                        sendWhatsapp(
                            'Hola! Quiero contactar con la Sucursal José Gálvez.', numGalvez
                        )
                    }
                >
                    <ListItemIcon>
                        <LocationOnIcon
                            fontSize="small"
                            sx={{ color: theme.palette.primary.main }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Sucursal José Gálvez" />
                </MenuItem>
            </Menu>
        </>
    );
};

export default QueryButton;

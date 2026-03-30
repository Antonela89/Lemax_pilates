import {
    Drawer,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MobileDrawer = ({ open, onClose, links, theme }) => (
    <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }} 
        PaperProps={{
            sx: {
                width: 280,
                backgroundColor: theme.palette.background.default,
                backgroundImage: 'none',
            },
        }}
    >
        {/* Cabecera del Drawer */}
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', borderBottom: `1px solid ${theme.palette.divider}` }}>
            <IconButton onClick={onClose} aria-label="cerrar menú">
                <CloseIcon />
            </IconButton>
        </Box>

        <Box sx={{ px: 2, py: 3 }}>
            <List>
                {links
                    .filter((link) => link.label !== 'Contacto')
                    .map((link) => {
                            const IconComponent = link.IconComponent;
                        return (
                        <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                component="a"
                                href={link.href}
                                onClick={onClose}
                                sx={{ 
                                    borderRadius: 2,
                                    py: 1.5,
                                    '&:hover': { bgcolor: 'rgba(197, 160, 105, 0.08)' }
                                }}
                            >
                                <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>
                                   {IconComponent && <IconComponent sx={{ mr: 1 }} />} 
                                </ListItemIcon>
                                <ListItemText
                                    primary={link.label}
                                    primaryTypographyProps={{ 
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        color: 'text.primary'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        );
                    })}
            </List>

            <Box sx={{ mt: 4, px: 1 }}>
                <Button
                    fullWidth
                    variant="contained"
                    component="a"
                    href="#contacto"
                    onClick={onClose}
                    sx={{ 
                        py: 2, 
                        fontWeight: 800, 
                        fontSize: '1rem',
                        borderRadius: '12px',
                        boxShadow: `0 8px 20px -5px ${theme.palette.primary.main}66`
                    }}
                >
                    Reservar Clase
                </Button>
            </Box>
        </Box>
    </Drawer>
);

export default MobileDrawer;
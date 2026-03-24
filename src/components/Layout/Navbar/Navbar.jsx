import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const NAV_LINKS = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Locales', href: '#locales' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Equipo', href: '#equipo' }
];

import logoDark from '@/assets/logos/logo-lemax-dark.jpg';
import logoLight from '@/assets/logos/logo-lemax-light.png';

const Logo = ({ mode }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Box
                component="img"
                src={mode === 'dark' ? logoDark : logoLight}
                alt="Le Max Centro de Pilates"
                sx={{
                    height: { xs: '65px', md: '80px' },
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease',
                    maxWidth: '100%',
                }}
            />
        </Box>
    );
};

const Navbar = ({ mode, toggleColorMode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const linkStyle = {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: 500,
        position: 'relative',
        cursor: 'pointer',
        padding: '0.25rem 0',
        transition: 'color 0.3s ease',
        fontFamily: '"Lato", "Arial", sans-serif',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            bottom: 0,
            left: 0,
            backgroundColor: theme.palette.primary.main,
            transform: 'scaleX(0)',
            transformOrigin: 'bottom right',
            transition: 'transform 0.3s cubic-bezier(0.86, 0, 0.07, 1)',
        },
        '&:hover': {
            color: theme.palette.primary.main,
            '&::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
            },
        },
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                borderBottom: `1px solid ${theme.palette.divider}`,
                zIndex: theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 6, lg: 8 }, minHeight: '80px !important' }}>
                <Logo mode={mode} />

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
                    <IconButton
                        onClick={toggleColorMode}
                        sx={{
                            color: theme.palette.text.primary,
                            transition: 'all 0.3s ease',
                            mr: -1, /* acercar al texto de inicio un poquito */
                            '&:hover': {
                                transform: 'rotate(15deg) scale(1.15)',
                                color: theme.palette.primary.main,
                                backgroundColor: 'transparent'
                            },
                        }}
                    >
                        {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </IconButton>

                    {NAV_LINKS.map((link) => (
                        <Box component="a" href={link.href} key={link.label} sx={linkStyle}>
                            {link.label}
                        </Box>
                    ))}
                    <Button
                        component="a"
                        href="#contacto"
                        variant="contained"
                        sx={{ py: 1.5, px: 4 }}
                    >
                        Contacto
                    </Button>
                </Box>

                {/* Actions (Mode Toggle + Mobile Menu Icon) */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                    <IconButton
                        onClick={toggleColorMode}
                        sx={{
                            color: theme.palette.text.primary,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'rotate(15deg) scale(1.15)',
                                color: theme.palette.primary.main,
                                backgroundColor: 'transparent'
                            },
                        }}
                    >
                        {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ color: theme.palette.text.primary, mr: -1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }}
                PaperProps={{
                    sx: { width: 280, backgroundColor: theme.palette.background.default },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List sx={{ px: 2 }}>
                    {NAV_LINKS.map((link) => (
                        <ListItem 
                            key={link.label} 
                            component="a" 
                            href={link.href} 
                            sx={{ py: 1.5, textDecoration: 'none', color: 'inherit' }} 
                            disablePadding 
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText
                                primary={link.label}
                                primaryTypographyProps={{
                                    fontSize: '1.2rem',
                                    fontWeight: 500,
                                    sx: {
                                        transition: 'color 0.2s',
                                        '&:hover': { color: theme.palette.primary.main },
                                        cursor: 'pointer'
                                    },
                                }}
                            />
                        </ListItem>
                    ))}
                    <ListItem sx={{ mt: 3 }} disablePadding>
                        <Button 
                            component="a" 
                            href="#contacto" 
                            variant="contained" 
                            onClick={handleDrawerToggle}
                            fullWidth 
                            sx={{ py: 1.5 }}
                        >
                            Contacto
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;

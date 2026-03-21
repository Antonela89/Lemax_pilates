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
    useTheme,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const NAV_LINKS = ['Inicio', 'Servicios', 'Locales', 'Instagram', 'Equipo'];

const Logo = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Typography
                variant="h6"
                component="span"
                sx={{
                    fontWeight: 800,
                    letterSpacing: '1px',
                    color: theme.palette.text.primary,
                    fontFamily: '"Montserrat", sans-serif',
                }}
            >
                LE
            </Typography>
            {/* Swosh Icon representing the pilates figure */}
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 0.5, mb: -0.5 }}>
                 <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7Z" fill={theme.palette.primary.main}/>
                    <path d="M11 8C16 11 19 16 18 22C17.5 25 15 25 14 23C12 19 10 14 9 12C7 9 4 10 2 12C1 13 -1 11 1 9C4 5 9 3 11 8Z" fill={theme.palette.primary.main}/>
                    <path d="M12 12C12 12 14 18 11 25C10.5 26.5 8 26 9.5 23C11 19 12 15 12 15" stroke={theme.palette.primary.main} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </Box>
            <Typography
                variant="h6"
                component="span"
                sx={{
                    fontWeight: 800,
                    letterSpacing: '1px',
                    color: theme.palette.text.primary,
                    fontFamily: '"Montserrat", sans-serif',
                }}
            >
                MAX
            </Typography>
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
                mt: 1,
                borderBottom: `1px solid ${theme.palette.divider}`,
                zIndex: theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, md: 0 }, minHeight: '80px !important' }}>
                <Logo />

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
                        <Box component="a" key={link} sx={linkStyle}>
                            {link}
                        </Box>
                    ))}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: '#fff',
                            borderRadius: '2px',
                            padding: '0.6rem 2rem',
                            fontWeight: 600,
                            boxShadow: 'none',
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            fontFamily: '"Lato", "Arial", sans-serif',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                                boxShadow: '0 6px 16px rgba(197, 160, 105, 0.3)',
                                transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                        }}
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
                        <ListItem key={link} sx={{ py: 1.5 }} disablePadding onClick={handleDrawerToggle}>
                            <ListItemText
                                primary={link}
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
                        <Button variant="contained" fullWidth sx={{ py: 1.5,
                            backgroundColor: theme.palette.primary.main,
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            }
                         }}>
                            Contacto
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;

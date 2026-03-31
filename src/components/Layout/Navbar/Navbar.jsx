import { useState, useMemo } from 'react';
import { AppBar, Toolbar, useTheme, alpha } from '@mui/material';
import { formatNavLinks } from '@/utils/navigationUtils';
import DesktopMenu from './DesktopMenu';
import MobileDrawer from './MobileDrawer';
import NavbarActions from './NavbarActions';
import Logo from './Logo';

const Navbar = ({ mode, toggleColorMode, data }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    
    const navLinks = data?.navbar || []; 

    const formattedLinks = useMemo(() => {
    return formatNavLinks(navLinks); 
}, [navLinks]);

const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
};
    const navHeight = { xs: '64px', md: '80px' };

    const linkStyle = {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        '&:hover': { color: theme.palette.primary.main },
    };

    return (
        <AppBar 
            position="fixed" 
            elevation={0} 
            sx={{ 
                height: navHeight,
                backgroundColor: alpha(theme.palette.background.default, 0.8), 
                backdropFilter: 'blur(10px)', 
                borderBottom: `1px solid ${theme.palette.divider}`,
                justifyContent: 'center' 
            }}
        >
            <Toolbar 
                sx={{ 
                    justifyContent: 'space-between', 
                    px: { xs: 2, lg: 8 },
                    minHeight: `${navHeight} !important`, 
                    height: navHeight
                }}
            >
                <Logo mode={mode} />

                <DesktopMenu 
                    links={formattedLinks} 
                    mode={mode} 
                    toggleColorMode={toggleColorMode} 
                    linkStyle={linkStyle} 
                    theme={theme}
                />

                <NavbarActions 
                    mode={mode} 
                    toggleColorMode={toggleColorMode} 
                    onOpenMenu={handleDrawerToggle} 
                    theme={theme} 
                />

                <MobileDrawer 
                    open={mobileOpen} 
                    onClose={handleDrawerToggle} 
                    links={formattedLinks} 
                    theme={theme} 
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
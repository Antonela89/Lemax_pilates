import { Box, Button, IconButton, Tooltip } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { scrollToSection } from '@/theme/animations';

const DesktopMenu = ({ links, mode, toggleColorMode, linkStyle, theme }) => (
    <Box
        sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 3,
        }}
    >
        {/* Switch de Modo */}
        <Tooltip
            title={
                mode === 'dark'
                    ? 'Cambiar a modo claro'
                    : 'Cambiar a modo oscuro'
            }
        >
            <IconButton
                onClick={toggleColorMode}
                color={theme.palette.text.primary}
            >
                {mode === 'dark' ? (
                    <LightModeOutlinedIcon />
                ) : (
                    <DarkModeOutlinedIcon />
                )}
            </IconButton>
        </Tooltip>

        {/* Mapeo de Links */}
        {links.map((link) => {
            if (link.label === 'Contacto') {
                return (
                    <Button
                        key={link.label}
                        component="a"
                        href={link.href}
                        variant="contained"
                        sx={{
                            py: 1.2,
                            px: 3,
                            fontWeight: 700,
                            borderRadius: '50px',
                        }}
                    >
                        {link.label}
                    </Button>
                );
            }

            return (
                <Box
                    key={link.label}
                    component="a"
                    href={link.href}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                    }}
                    sx={linkStyle}
                >
                    {link.label}
                </Box>
            );
        })}
    </Box>
);

export default DesktopMenu;

import { Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const NavbarActions = ({mode, toggleColorMode, handleDrawerToggle, theme}) => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                    <IconButton onClick={toggleColorMode} color={theme.palette.text.primary}>
                        {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </IconButton>
                    <IconButton
                        color={theme.palette.text.primary}
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

  )
}

export default NavbarActions
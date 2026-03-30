import {Box} from '@mui/material';
import logoDark from '@/assets/logos/logo-lemax-dark.jpg';
import logoLight from '@/assets/logos/logo-lemax-light.png';

const Logo = ({ mode }) => {
    return (
        <Box 
            component="a" 
            href="#inicio" 
            aria-label="Le Max Pilates - Ir al inicio"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
            <Box
                component="img"
                src={mode === 'dark' ? logoDark : logoLight}
                alt="" 
                sx={{
                    height: { xs: '45px', md: '55px' }, 
                    objectFit: 'contain',
                    maxWidth: '100%',
                }}
            />
        </Box>
    );
};

export default Logo
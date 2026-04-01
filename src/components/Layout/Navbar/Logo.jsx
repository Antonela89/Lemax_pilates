import {Box} from '@mui/material';
import logoDark from '@/assets/logos/logo-lemax-dark.webp';
import logoLight from '@/assets/logos/logo-lemax-light.webp';

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
                    width: { xs: '120px', md: '150px' },
                    height: { xs: '45px', md: '55px' }, 
                    objectFit: 'contain',
                    maxWidth: '100%',
                }}
            />
        </Box>
    );
};

export default Logo
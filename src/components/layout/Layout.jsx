import { Box } from '@mui/material';
// import Navbar from '../common/Navbar';
// import WhatsAppButton from '../common/WhatsAppButton';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            {/* Navbar fijo arriba */}

            {/* Contenido principal que cambia */}
            <Box
                component="main"
                sx={{ flexGrow: 1, px: { xs: 4, sm: 6, md: 8 } }}
            >
                {children}
            </Box>

            {/* Botón flotante de WhatsApp */}
            {/* <WhatsAppButton /> */}

            <Footer />
        </Box>
    );
};

export default Layout;

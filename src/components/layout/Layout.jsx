import { Box } from '@mui/material';
// import Navbar from '../common/Navbar'; 
// import Footer from '../common/Footer'; 
// import WhatsAppButton from '../common/WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                p: {sx: 4, md: 8}
            }}
        >
            {/* Navbar fijo arriba */}

            {/* Contenido principal que cambia */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            {/* Botón flotante de WhatsApp */}
            {/* <WhatsAppButton /> */}

            {/* Footer al final */}
        </Box>
    );
};

export default Layout;

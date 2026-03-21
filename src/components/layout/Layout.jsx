import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
// import WhatsAppButton from '../common/WhatsAppButton';
import Footer from './Footer/Footer';

const Layout = ({ children, mode, toggleColorMode }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100vw'
            }}
        >
            <Navbar mode={mode} toggleColorMode={toggleColorMode} />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            {/* Botón flotante de WhatsApp */}
            {/* <WhatsAppButton /> */}

            <Footer />
        </Box>
    );
};

export default Layout;

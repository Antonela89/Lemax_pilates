import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
// import WhatsAppButton from '../common/WhatsAppButton';
import Footer from './Footer/Footer';

const Layout = ({ children, mode, toggleColorMode, data }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
                overflowX: 'hidden'
            }}
        >
            <Navbar mode={mode} toggleColorMode={toggleColorMode} />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            {/* Botón flotante de WhatsApp */}
            {/* <WhatsAppButton /> */}

            <Footer data={data}/>
        </Box>
    );
};

export default Layout;

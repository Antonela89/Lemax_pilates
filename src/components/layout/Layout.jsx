import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import QueryButton from '../common/QueryButton/QueryButton';
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
            <Navbar mode={mode} toggleColorMode={toggleColorMode} data={data} />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            {/* Botón flotante de WhatsApp */}
            <QueryButton whatsappNumber={data.locations[0].whatsapp} />

            <Footer data={data}/>
        </Box>
    );
};

export default Layout;

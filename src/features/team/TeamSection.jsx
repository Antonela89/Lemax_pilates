import { Container, useTheme, useMediaQuery, Box } from '@mui/material';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import TripleGlowWave from '@/components/common/Divider/TripleGlowWave';
import AutoSlider from '@/components/common/Sliders/AutoSlider';
import StaffCard from '@/components/common/Cards/StaffCard';
// import Degraded from '@/components/common/Divider/Degraded';

const TeamSection = ({ staff = [] }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const itemsToShow = isMobile ? 1 : isTablet ? 2 : 3;

    if (!staff.length) return null;

    // const bgTop = theme.palette.background.paper;
    const bgBottom = theme.palette.background.default;

    return (
        <SectionContainer
            id="equipo"
            background="transparent"
            sx={{
                mt: { xs: -10, md: -12 }, 
                position: 'relative',
                zIndex: 10, 
                backdropFilter: 'blur(4px)',
            }}
        >

            <TripleGlowWave colorTop={'transparent'} colorBottom={bgBottom} reverse />

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <TitleSection
                    textOverline="NUESTRO EQUIPO"
                    texth2="INSTRUCTORES CERTIFICADOS"
                />

                <Box sx={{ mt: 6 }}>
                    <AutoSlider
                        items={staff}
                        itemsToShow={itemsToShow}
                        renderItem={(person) => <StaffCard person={person} />}
                    />
                </Box>
            </Container>
        </SectionContainer>
    );
};

export default TeamSection;

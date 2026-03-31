import { useState, useEffect } from 'react';
import { Container, useTheme, useMediaQuery, Box } from '@mui/material';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import TripleGlowWave from '@/components/common/Divider/TripleGlowWave';
import AutoSlider from '@/components/common/Sliders/AutoSlider';
import StaffCard from '@/components/common/Cards/StaffCard';

const TeamSection = ({ staff = [] }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const itemsToShow = isMobile ? 1 : isTablet ? 2 : 3;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Si no cargando y no hay staff, no mostramos nada
    if (!loading && staff.length === 0) return null;

    const bgBottom = theme.palette.background.default;

    // Skeletons para el slider
    const skeletonItems = Array.from({ length: 6 }, (_, i) => ({ id: `skeleton-${i}` }));

    return (
        <SectionContainer
            id="equipo"
            background="transparent"
            sx={{
                position: 'relative',
                zIndex: 10,
                backdropFilter: 'blur(4px)',
                top: { xs: '-40px', sm: '-60px', md: '-80px' },
            }}
        >
            <TripleGlowWave
                colorTop={'transparent'}
                colorBottom={bgBottom}
                reverse
            />

            <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
                <TitleSection
                    textOverline="NUESTRO EQUIPO"
                    texth2="INSTRUCTORES CERTIFICADOS"
                />

                <Box sx={{ mt: 6 }}>
                    <AutoSlider
                        items={loading ? skeletonItems : staff}
                        itemsToShow={itemsToShow}
                        renderItem={(item) => (
                            <StaffCard 
                                person={loading ? null : item} 
                                loading={loading} 
                            />
                        )}
                    />
                </Box>
            </Container>
        </SectionContainer>
    );
};

export default TeamSection;

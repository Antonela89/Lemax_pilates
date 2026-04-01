import { useState, useEffect } from 'react';
import { Container, useTheme, useMediaQuery, Box, alpha } from '@mui/material';
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

    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!staff.length) return null;

    const bgBottom = theme.palette.background.default;

    // Skeletons para el slider
    const skeletonItems = Array.from({ length: 6 }, (_, i) => ({
        id: `skeleton-${i}`,
    }));

    return (
        <SectionContainer
            id="equipo"
            background="transparent"
            aria-labelledby="team-section-title"
            sx={{
                position: 'relative',
                zIndex: 10,
                backdropFilter: 'blur(8px)',
                mt: { xs: '-40px', sm: '-60px', md: '-80px' },
                backgroundColor: alpha(theme.palette.background.default, 0.4),
                maskImage:
                    'linear-gradient(to bottom, transparent 0%, black 50px)',
            }}
        >
            <TripleGlowWave
                colorTop={'transparent'}
                colorBottom={bgBottom}
                reverse
            />

            <Container maxWidth="lg" sx={{ pb: { xs: 4, md: 8 } }}>
                <TitleSection
                    id="team-section-title"
                    textOverline="NUESTRO EQUIPO"
                    texth2="INSTRUCTORES CERTIFICADOS"
                />

                <Box
                    sx={{ mt: { xs: 4, md: 8 } }}
                    role="region"
                    aria-label="Carrusel de instructores"
                >
                    <AutoSlider
                        items={loading ? skeletonItems : staff}
                        itemsToShow={itemsToShow}
                        interval={prefersReducedMotion ? 10000 : 5000}
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

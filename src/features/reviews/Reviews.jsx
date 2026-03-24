import { useState } from 'react';
import { Box, Container, useTheme } from '@mui/material';

// Componentes y Configuración
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import ReviewCard from '@/components/common/Cards/ReviewCard';
import { fadeInUpLeft, staggerContainer } from '@/theme/animations';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';
import Marquee from '@/components/common/Sliders/Marquee';

const Reviews = ({ reviews = [] }) => {
    const theme = useTheme();

    const GOLD_BG = theme.palette.primary.main;
    const SECONDARY = theme.palette.text.secondary;
    // Inicialización aleatoria (una sola vez)
    const [shuffledReviews] = useState(() =>
        [...reviews].sort(() => Math.random() - 0.5)
    );

    if (reviews.length === 0) return null;

    return (
        <SectionContainer animation={staggerContainer} id="reviews">
            <Box sx={{ pt: { xs: 4 }, pb: { xs: 8 }, mb: { xs: 4, md: 15 } }}>
                <Container maxWidth="lg">
                    <TitleSection
                        textOverline="Comunidad"
                        texth2="Nuestra Comunidad"
                        animation={fadeInUpLeft}
                    />
                </Container>

                <Box sx={{ mt: 6 }}>
                    <Marquee
                        items={shuffledReviews}
                        renderItem={(review) => <ReviewCard review={review} />}
                        speed="90s" 
                        itemWidth={{ xs: '280px', md: '400px' }}
                    />
                </Box>
            </Box>
            <LayeredWaves fill1={SECONDARY} fill2={GOLD_BG} />
        </SectionContainer>
    );
};

export default Reviews;

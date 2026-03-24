import { useState, useMemo } from 'react';
import { Box, Container } from '@mui/material';
import { keyframes } from '@mui/system';

// Componentes y Configuración
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import ReviewCard from '@/components/common/Cards/ReviewCard';
import { fadeInUpLeft, staggerContainer } from '@/theme/animations';

const scrollInfinite = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

const Reviews = ({ reviews = [] }) => {
    // Inicialización aleatoria (una sola vez)
    const [shuffledReviews] = useState(() => 
        [...reviews].sort(() => Math.random() - 0.5)
    );

    const doubledReviews = useMemo(
        () => [...shuffledReviews, ...shuffledReviews],
        [shuffledReviews]
    );

    if (reviews.length === 0) return null;

    return (
        <SectionContainer background="background.default" animation={staggerContainer} id="reviews">
            {/* Box envolvente para aire arriba */}
            <Box sx={{ pt: { xs: 8, md: 15 }, pb: { xs: 4, md: 6 }, overflow: 'hidden' }}>
                
                <Container maxWidth="lg">
                    <TitleSection
                        textOverline="Comunidad"
                        texth2="Nuestra Comunidad"
                        animation={fadeInUpLeft}
                    />
                </Container>

                <Box sx={{
                    width: '100%',
                    position: 'relative',
                    mt: 6,
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                }}>
                    <Box sx={{
                        display: 'flex',
                        width: 'max-content',
                        animation: `${scrollInfinite} 80s linear infinite`,
                        '&:hover': { animationPlayState: 'paused' },
                        '@media (max-width: 600px)': { animationDuration: '45s' },
                    }}>
                        {doubledReviews.map((review, idx) => (
                            <Box key={`${review.id}-${idx}`} sx={{ width: { xs: '300px', md: '380px' }, px: 2, flexShrink: 0 }}>
                                <ReviewCard review={review} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <LayeredWaves fill1={SECONDARY} fill2={GOLD_BG} />
        </SectionContainer>
    );
};

export default Reviews;

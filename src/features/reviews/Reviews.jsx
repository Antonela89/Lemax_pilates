import { useState, useEffect } from 'react';
import { Box, Container, useTheme } from '@mui/material';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import ReviewCard from '@/components/common/Cards/ReviewCard';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';
import Marquee from '@/components/common/Sliders/Marquee';
import { fadeInUpLeft, staggerContainer } from '@/theme/animations';

const Reviews = ({ reviews = [] }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [shuffledReviews, setShuffledReviews] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Verificamos que sea un array
            if (Array.isArray(reviews) && reviews.length > 0) {
                const shuffled = [...reviews].sort(() => Math.random() - 0.5);
                setShuffledReviews(shuffled);
            }
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, [reviews]);

    // Si después de cargar NO hay datos, no mostramos la sección.
    if (!loading && shuffledReviews.length === 0) return null;

    const skeletonItems = Array.from({ length: 3 }, (_, i) => ({
        id: `skeleton-${i}`,
    }));

    return (
        <SectionContainer animation={staggerContainer} id="reviews">
            <Box
                sx={{
                    pt: 4,
                    pb: { xs: 12, sm: 18, md: 24 },
                    mb: { xs: 4, md: 15 },
                }}
            >
                <Container maxWidth="lg">
                    <TitleSection
                        textOverline="Comunidad"
                        texth2="Nuestra Comunidad"
                        animation={fadeInUpLeft}
                    />
                </Container>

                <Box sx={{ mt: 6 }}>
                    {loading ? (
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                justifyContent: 'center',
                                overflow: 'hidden',
                                px: 2,
                            }}
                        >
                            {skeletonItems.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        width: { xs: 280, md: 360 },
                                        flexShrink: 0,
                                    }}
                                >
                                    <ReviewCard loading />
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        <Marquee
                            items={shuffledReviews}
                            renderItem={(item) => <ReviewCard review={item} />}
                            speed="90s"
                            itemWidth={{ xs: '260px', md: '360px' }}
                        />
                    )}
                </Box>
            </Box>
            <LayeredWaves
                fill1={theme.palette.text.secondary}
                fill2={theme.palette.primary.main}
            />
        </SectionContainer>
    );
};

export default Reviews;

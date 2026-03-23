import React, { useState, useMemo } from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Rating,
    Avatar,
    useTheme,
    alpha,
} from '@mui/material';
import { keyframes } from '@mui/system';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlaceIcon from '@mui/icons-material/Place';

// Componentes y Configuración
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';
import data from '@/data/data.json';
import { fadeInUpLeft, staggerContainer } from '@/theme/animations';

// IMÁGENES
import reviewDark from '@/assets/images/review/review_dark.webp';
import reviewLight from '@/assets/images/review/review_light.webp';

const scrollInfinite = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Reviews = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const backgroundImage = isDarkMode ? reviewDark : reviewLight;

    const [shuffledReviews] = useState(() => 
        [...data.reviews].sort(() => Math.random() - 0.5)
    );

    // efecto infinito
    const doubledReviews = useMemo(
        () => [...shuffledReviews, ...shuffledReviews],
        [shuffledReviews]
    );

    if (shuffledReviews.length === 0) return null;

    return (
        <SectionContainer 
            background="background.default" 
            animation={staggerContainer}
            id="reviews"
        >
            {/* Divisor superior */}
            <LayeredWaves />
            
            <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 6 }, overflow: 'hidden' }}>
                
                <Container maxWidth="lg">
                    <TitleSection
                        textOverline="Testimonios"
                        texth2="Nuestra Comunidad"
                        animation={fadeInUpLeft}
                    />
                </Container>

                {/* MARQUEE WRAPPER */}
                <Box
                    sx={{
                        width: '100%',
                        position: 'relative',
                        py: 6,
                        overflow: 'hidden',
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: 'max-content',
                            animation: `${scrollInfinite} 80s linear infinite`,
                            '&:hover': { animationPlayState: 'paused' },
                            '@media (max-width: 600px)': {
                                animationDuration: '45s',
                            },
                        }}
                    >
                        {doubledReviews.map((review, idx) => (
                            <Box
                                key={`${review.id}-${idx}`}
                                sx={{
                                    width: { xs: '300px', md: '380px' },
                                    px: 2,
                                    flexShrink: 0,
                                }}
                            >
                                {/* CARD GLASS */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: { xs: 3, md: 4 },
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: `${theme.shape.borderRadius * 1.5}px`,
                                        overflow: 'hidden',
                                        bgcolor: 'background.default',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                        backgroundColor: isDarkMode
                                            ? alpha('#0f172a', 0.6)
                                            : alpha('#ffffff', 0.6),
                                        border: '1px solid',
                                        borderColor: alpha(theme.palette.primary.main, 0.2),
                                        boxShadow: isDarkMode
                                            ? `0 10px 30px ${alpha('#000', 0.6)}`
                                            : `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            borderColor: 'primary.main',
                                            boxShadow: `0 15px 40px ${alpha(theme.palette.primary.main, 0.25)}`,
                                        },
                                    }}
                                >
                                    {/* FONDO IMAGEN SILUETA */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `url(${backgroundImage})`,
                                            backgroundSize: '80%', 
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            mixBlendMode: isDarkMode ? 'normal' : 'multiply',
                                            opacity: isDarkMode ? 0.15 : 0.4,
                                            filter: isDarkMode ? 'none' : 'contrast(1.2) brightness(1.1)', 
                                            pointerEvents: 'none',
                                            zIndex: 0,
                                        }}
                                    />

                                    {/* OVERLAY PARA LEGIBILIDAD */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: isDarkMode
                                                ? `linear-gradient(to bottom, ${alpha(theme.palette.background.default, 0.2)}, ${alpha(theme.palette.background.default, 0.8)})`
                                                : `linear-gradient(to bottom, ${alpha('#fff', 0.1)}, ${alpha('#fff', 0.5)})`,
                                            zIndex: 0,
                                        }}
                                    />

                                    {/* CONTENIDO */}
                                    <Stack
                                        spacing={2.5}
                                        sx={{ height: '100%', position: 'relative', zIndex: 1 }}
                                    >
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Rating value={review.rating} readOnly size="small" sx={{ color: 'primary.main' }} />
                                            <FormatQuoteIcon sx={{ color: alpha(theme.palette.primary.main, 0.2), fontSize: 35 }} />
                                        </Stack>

                                        <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.6, color: 'text.secondary', flexGrow: 1, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                                            &ldquo;{review.comment}&rdquo;
                                        </Typography>

                                        <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 2 }}>
                                            <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', fontWeight: 800, width: 48, height: 48, fontSize: '1rem', boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.4)}` }}>
                                                {review.userName?.split(' ').map((n) => n.charAt(0).toUpperCase()).slice(0, 2).join('')}
                                            </Avatar>

                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', fontFamily: 'Montserrat', lineHeight: 1.2 }}>
                                                    {review.userName.toUpperCase()}
                                                </Typography>

                                                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5 }}>
                                                    <PlaceIcon sx={{ fontSize: 14, color: 'primary.main' }} />
                                                    <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: 0.5 }}>
                                                        {review.location}
                                                    </Typography>
                                                </Stack>

                                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.1, fontSize: '0.65rem', opacity: 0.7 }}>
                                                    {review.date}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </SectionContainer>
    );
};

export default Reviews;
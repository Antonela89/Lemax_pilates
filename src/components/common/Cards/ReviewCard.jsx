import React from 'react';
import { Box, Typography, Stack, Rating, Avatar, useTheme, alpha, Skeleton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlaceIcon from '@mui/icons-material/Place';

// Importación de la silueta dorada
import pilatesSilhouette from '@/assets/images/review/pilates_comment.webp';

const ReviewCard = ({ review, loading = false }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const cardStyles = {
        p: { xs: 3, md: 4 },
        height: '100%',
        minHeight: { xs: 240, md: 280 },
        display: 'flex',
        flexDirection: 'column',
        borderRadius: `${theme.shape.borderRadius * 1.5}px`,
        border: '1px solid',
        position: 'relative',
        overflow: 'hidden', 
    };

    if (loading) {
        const skeletonGlow = { bgcolor: alpha(theme.palette.primary.main, 0.08) };
        return (
            <Box sx={{ ...cardStyles, backdropFilter: 'blur(12px)', backgroundColor: alpha(theme.palette.background.paper, 0.6), borderColor: alpha(theme.palette.primary.main, 0.2) }}>
                <Stack spacing={2.5} sx={{ height: '100%' }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Skeleton variant="text" width={90} height={20} animation="wave" sx={skeletonGlow} />
                        <Skeleton variant="circular" width={28} height={28} animation="wave" sx={skeletonGlow} />
                    </Stack>
                    <Stack spacing={1}>
                        <Skeleton variant="text" height={16} animation="wave" sx={skeletonGlow} />
                        <Skeleton variant="text" height={16} animation="wave" sx={skeletonGlow} />
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 'auto' }}>
                        <Skeleton variant="circular" width={40} height={40} animation="wave" sx={skeletonGlow} />
                        <Box sx={{ width: '100%' }}>
                            <Skeleton variant="text" width={60} height={14} animation="wave" sx={skeletonGlow} />
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        );
    }

    if (!review) return null;

    const rating = Number(review.rating) || 5; 
    const comment = review.comment || "Sin comentario disponible.";
    const name = review.userName || "Cliente Le Max";
    const location = review.location || "Nuestra Comunidad";

    const initials = name.trim().split(' ').filter(Boolean).map((n) => n[0]).join('').toUpperCase().slice(0, 2) || 'L';

    return (
        <Box
            sx={{
                ...cardStyles,
                backdropFilter: 'blur(12px) saturate(1.8)',
                WebkitBackdropFilter: 'blur(12px) saturate(1.8)',
                backgroundColor: isDarkMode ? alpha(theme.palette.background.paper, 0.7) : alpha('#ffffff', 0.65),
                borderColor: alpha(theme.palette.primary.main, 0.2),
                boxShadow: isDarkMode ? `0 10px 25px ${alpha('#000', 0.5)}` : `0 10px 25px ${alpha(theme.palette.primary.main, 0.08)}`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                
                // ANIMACIÓN HOVER
                '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 18px 35px ${alpha(theme.palette.primary.main, 0.2)}`,
                    
                    '& .card-silhouette': {
                        transform: 'translate(calc(-50% + 55px), calc(-50% + 55px)) scale(1.1)',
                        opacity: isDarkMode ? 0.2 : 0.25, // Más color en hover
                    }
                },
            }}
        >
            {/* SILUETA*/}
            <Box
                className="card-silhouette"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    // Estado inicial
                    transform: 'translate(-50%, -50%)',
                    
                    width: '220px',
                    height: '220px',
                    backgroundImage: `url(${pilatesSilhouette})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    
                    // Opacidad inicial 
                    opacity: isDarkMode ? 0.08 : 0.15, 
                    
                    zIndex: 0,
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                    pointerEvents: 'none',
                }}
            />

            <Stack spacing={2} sx={{ height: '100%', position: 'relative', zIndex: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Rating value={rating} readOnly size="small" sx={{ color: theme.palette.primary.main }} />
                    <FormatQuoteIcon sx={{ color: alpha(theme.palette.primary.main, 0.25), fontSize: 30 }} />
                </Stack>

                <Typography
                    variant="body2"
                    sx={{
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        color: 'text.secondary',
                        flexGrow: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textShadow: !isDarkMode ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                    }}
                >
                    &ldquo;{comment}&rdquo;
                </Typography>

                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ pt: 1 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontWeight: 700, width: 40, height: 40, fontSize: '0.85rem' }}>
                        {initials}
                    </Avatar>
                    <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', lineHeight: 1.2 }}>
                            {name.toUpperCase()}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <PlaceIcon sx={{ fontSize: 12, color: theme.palette.primary.main }} />
                            <Typography variant="caption" sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>
                                {location}
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ReviewCard;
import React from 'react';
import { Box, Typography, Stack, Rating, Avatar, useTheme, alpha } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlaceIcon from '@mui/icons-material/Place';

// Importa tu silueta dorada
import silhouetteGold from '@/assets/images/review/pilates_comment.webp'; 

const ReviewCard = ({ review }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Box
            sx={{
                position: 'relative',
                p: { xs: 3, md: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: `${theme.shape.borderRadius * 1.5}px`,
                overflow: 'hidden',
                
                // GLASSMORPHISM INTEGRADO CON EL THEME
                backdropFilter: 'blur(12px) saturate(1.8)',
                WebkitBackdropFilter: 'blur(12px) saturate(1.8)',
                backgroundColor: isDarkMode 
                    ? alpha(theme.palette.background.paper, 0.7) 
                    : alpha('#ffffff', 0.65), 
                
                border: '1px solid',
                borderColor: alpha(theme.palette.primary.main, 0.2),
                boxShadow: isDarkMode 
                    ? `0 10px 30px ${alpha('#000', 0.6)}` 
                    : `0 10px 30px ${alpha(theme.palette.primary.main, 0.08)}`,
                
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                },
            }}
        >
            {/*SILUETA CENTRADA COMO MARCA DE AGUA */}
            <Box
                component="img"
                src={silhouetteGold}
                alt=""
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)', 
                    height: '85%', 
                    width: 'auto',
                    opacity: isDarkMode ? 0.12 : 0.25,
                    pointerEvents: 'none',
                    zIndex: 0,
                    filter: 'contrast(1.1) saturate(1.2)',
                }}
            />

            {/* CONTENIDO */}
            <Stack 
                spacing={2.5} 
                sx={{ 
                    height: '100%', 
                    position: 'relative', 
                    zIndex: 1, 
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Rating 
                        value={review.rating} 
                        readOnly 
                        size="small" 
                        sx={{ color: theme.palette.primary.main }} 
                    />
                    <FormatQuoteIcon sx={{ color: alpha(theme.palette.primary.main, 0.3), fontSize: 35 }} />
                </Stack>

                <Typography 
                    variant="body1" 
                    sx={{ 
                        fontStyle: 'italic', 
                        lineHeight: 1.6, 
                        color: theme.palette.text.secondary,
                        flexGrow: 1,
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                        textShadow: isDarkMode ? '0 0 10px rgba(0,0,0,0.5)' : 'none'
                    }}
                >
                    &ldquo;{review.comment}&rdquo;
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 2 }}>
                    <Avatar 
                        sx={{ 
                            bgcolor: theme.palette.primary.main, 
                            color: theme.palette.primary.contrastText,
                            fontWeight: 800, 
                            width: 48, 
                            height: 48,
                            fontSize: '1rem',
                            boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.4)}`
                        }}
                    >
                        {review.userName?.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </Avatar>

                    <Box>
                        <Typography 
                            variant="subtitle2" 
                            sx={{ 
                                fontWeight: 800, 
                                color: theme.palette.text.primary, 
                                fontFamily: 'Montserrat', 
                                lineHeight: 1.2 
                            }}
                        >
                            {review.userName.toUpperCase()}
                        </Typography>
                        
                        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5 }}>
                            <PlaceIcon sx={{ fontSize: 14, color: theme.palette.primary.main }} />
                            <Typography 
                                variant="caption" 
                                sx={{ 
                                    color: theme.palette.primary.main, 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    fontSize: '0.65rem', 
                                    letterSpacing: 0.5 
                                }}
                            >
                                {review.location}
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ReviewCard;
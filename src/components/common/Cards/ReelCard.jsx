import {
    Box,
    Paper,
    Typography,
    alpha,
    Skeleton,
    useTheme,
} from '@mui/material';
import { motion } from 'motion/react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const ReelCard = ({ post, isLoading = false }) => {
    const theme = useTheme();

    const cardStyles = {
        display: 'block',
        position: 'relative',
        aspectRatio: '9/16', 
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
    };

    // --- ESTADO CARGANDO (SKELETON) ---
    if (isLoading) {
        return (
            <Box sx={cardStyles}>
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.05) }}
                />

                {/* Elemento central para llamar la atención */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <InstagramIcon
                            sx={{
                                fontSize: 60,
                                color: alpha(theme.palette.primary.main, 0.2),
                            }}
                        />
                    </motion.div>
                    <Typography
                        variant="caption"
                        sx={{
                            color: alpha(theme.palette.text.secondary, 0.4),
                            fontWeight: 600,
                            letterSpacing: 1,
                        }}
                    >
                        CARGANDO REELS...
                    </Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Paper
            component={motion.a}
            href={post?.permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            elevation={0}
            sx={{
                ...cardStyles,
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover .overlay': { opacity: 1 },
                '&:hover img': { transform: 'scale(1.1)' },
            }}
        >
            {/* Imagen del Reel */}
            {post?.mediaUrl ? (
                <Box
                    component="img"
                    src={post.mediaUrl}
                    alt="LeMax Pilates Reel Instagram"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                    }}
                />
            ) : (
                // Fallback si por alguna razón no hay imagen
                <Box sx={{ height: '100%', bgcolor: 'action.hover' }} />
            )}

            {/* Overlay interactivo */}
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: alpha(theme.palette.primary.main, 0.6),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(4px)',
                    p: 2,
                    textAlign: 'center',
                }}
            >
                <PlayCircleOutlineIcon
                    sx={{ fontSize: 50, color: '#fff', mb: 1 }}
                />
                <Typography
                    variant="button"
                    sx={{ color: '#fff', fontWeight: 800 }}
                >
                    VER REEL
                </Typography>
            </Box>
        </Paper>
    );
};

export default ReelCard;

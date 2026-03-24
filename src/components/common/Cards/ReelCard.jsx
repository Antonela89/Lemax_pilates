import {
    Box,
    Paper,
    Typography,
    alpha,
    Skeleton,
    useTheme,
} from '@mui/material';
import { motion } from 'motion/react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const ReelCard = ({ post, isLoading = false }) => {
    const theme = useTheme();

    const cardStyles = {
        display: 'block',
        position: 'relative',
        aspectRatio: '9/16', // Mantiene la proporción de Reel
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
    };

    // --- ESTADO CARGANDO (SKELETON) ---
    if (isLoading) {
        return (
            <Paper elevation={0} sx={cardStyles}>
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                />
            </Paper>
        );
    }

    return (
        <Paper
            component={motion.a}
            href={post.permalink}
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
            <Box
                component="img"
                src={post.mediaUrl}
                alt="Le Max Pilates Instagram"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                }}
            />

            {/* Overlay interactivo */}
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: alpha(theme.palette.primary.main, 0.4),
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
                    variant="caption"
                    sx={{
                        color: '#fff',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                    }}
                >
                    Siguenos en Instagram
                </Typography>
            </Box>
        </Paper>
    );
};

export default ReelCard;

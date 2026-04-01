import { Box, Typography, useTheme, Skeleton, alpha } from '@mui/material';

const StaffCard = ({ person, loading = false }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    if (loading) {
        return (
            <Box
                sx={{
                    p: { xs: 2, md: 2.5 },
                    pb: { xs: 3, md: 3.5 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: isDarkMode
                        ? theme.palette.background.paper
                        : '#ffffff',
                    borderRadius: '20px',
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: '100%',
                        aspectRatio: '1/1',
                        borderRadius: '14px',
                        mb: 3,
                    }}
                    animation="wave"
                />
                <Skeleton 
                    variant="text" 
                    width="60%" 
                    height={32} 
                    sx={{ mx: 'auto', mb: 1 }} 
                    animation="wave"
                />
                <Skeleton 
                    variant="text" 
                    width="40%" 
                    sx={{ mx: 'auto', mb: 1 }} 
                    animation="wave"
                />
                <Skeleton 
                    variant="text" 
                    width="80%" 
                    sx={{ mx: 'auto' }} 
                    animation="wave"
                />
            </Box>
        );
    }

    if (!person) return null;

    return (
        <Box
            component="article"
            sx={{
                p: { xs: 2.5, md: 3 },
                pb: { xs: 4, md: 4.5 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: isDarkMode
                    ? theme.palette.background.paper
                    : '#ffffff',
                borderRadius: '24px',
                boxShadow: isDarkMode
                    ? '0 4px 20px rgba(0,0,0,0.3)'
                    : '0 4px 20px rgba(0,0,0,0.03)',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: isDarkMode
                        ? '0 15px 35px rgba(0,0,0,0.5)'
                        : '0 15px 35px rgba(0,0,0,0.08)',
                },
            }}
        >
            {/* Image wrapper */}
            <Box
                sx={{
                    width: '100%',
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    mb: 3,
                    position: 'relative',
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${!isDarkMode ? 'rgba(0,0,0,0.04)' : 'transparent'}`,
                }}
            >
                <Box
                    component="img"
                    src={person.image}
                    alt={`Instructor/a de Le Max Pilates: ${person.name}`}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                        transition: 'all 0.5s ease',
                        '&:hover': {
                            filter: 'grayscale(0%) contrast(1) brightness(1.05)',
                            transform: 'scale(1.03)',
                        },
                    }}
                />
            </Box>

            {/* Info */}
            <Typography
                variant="h6"
                component="h3"
                sx={{
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    textAlign: 'center',
                    mb: 1,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
            >
                {person.name}
            </Typography>

            <Typography
                variant="body2"
                color="primary.dark"
                sx={{
                    textAlign: 'center',
                    fontWeight: 600,
                    maxWidth: '90%',
                    mx: 'auto',
                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                }}
            >
                {person.role}
            </Typography>

            <Typography
                variant="body2"
                color="text.primary"
                sx={{
                    textAlign: 'center',
                    mt: 1,
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    lineHeight: 1.4,
                    maxWidth: '95%',
                    mx: 'auto',
                }}
            >
                {person.education}
            </Typography>
        </Box>
    );
};

export default StaffCard;

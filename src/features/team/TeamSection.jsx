import {
    Box,
    Typography,
    Container,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import SectionContainer from '../../components/common/SectionContainer/SectionContainer';
import TitleSection from '../../components/common/TitleSection/TitleSection';

const TeamSection = ({ staff = [] }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

    const itemsToShow = isMobile ? 1 : isTablet ? 2 : 3;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % staff.length);
        }, 4500); // 4.5 seconds for a relaxed pace

        return () => clearInterval(interval);
    }, [itemsToShow, staff.length]);

    if (!staff || staff.length === 0) return null;

    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleItems.push(staff[(currentIndex + i) % staff.length]);
    }

    const sectionAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // animates TitleSection first, then the carousel
            },
        },
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <SectionContainer
            background="background.default"
            id="equipo"
            animation={sectionAnimation}
        >
            <Container
                maxWidth="lg"
                sx={{
                    pt: { xs: 8 },
                    px: { xs: 2, md: 6 },
                    pb: { xs: 8, md: 16 },
                }}
            >
                <TitleSection
                    textOverline="NUESTRO EQUIPO"
                    texth2="INSTRUCTORES CERTIFICADOS"
                    animation={itemAnimation}
                />

                <Box
                    component={motion.div}
                    variants={itemAnimation}
                    sx={{
                        position: 'relative',
                        px: { xs: 2, md: 5 },
                        mt: 6,
                        overflow: 'hidden',
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                            style={{
                                display: 'flex',
                                gap: isMobile ? '16px' : '32px',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                minHeight: '380px',
                                width: '100%',
                            }}
                        >
                            {visibleItems.map((person, index) => (
                                <Box
                                    key={`${person.id}-${index}`}
                                    sx={{
                                        flex: 1,
                                        minWidth: 0, // prevents flex item from overflowing
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            p: { xs: 2, md: 2.5 },
                                            pb: { xs: 3, md: 3.5 },
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            backgroundColor:
                                                theme.palette.mode === 'light'
                                                    ? '#ffffff'
                                                    : theme.palette.background.paper,
                                            borderRadius: '20px',
                                            boxShadow:
                                                theme.palette.mode === 'light'
                                                    ? '0 4px 20px rgba(0,0,0,0.03)'
                                                    : '0 4px 20px rgba(0,0,0,0.3)',
                                            border: `1px solid ${theme.palette.divider}`,
                                            transition:
                                                'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow:
                                                    theme.palette.mode ===
                                                    'light'
                                                        ? '0 15px 35px rgba(0,0,0,0.08)'
                                                        : '0 15px 35px rgba(0,0,0,0.5)',
                                            },
                                        }}
                                    >
                                        {/* Image wrapper */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                aspectRatio: '1/1',
                                                overflow: 'hidden',
                                                borderRadius: '14px',
                                                mb: 3,
                                                position: 'relative',
                                                backgroundColor:
                                                    theme.palette.background
                                                        .default,
                                                border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'transparent'}`,
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={person.image}
                                                alt={person.name}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    filter: 'grayscale(100%) contrast(1.1) brightness(0.95) !important',
                                                    transition: 'all 0.5s ease',
                                                    '&:hover': {
                                                        filter: 'grayscale(0%) contrast(1) brightness(1.05) !important',
                                                        transform:
                                                            'scale(1.03)',
                                                    },
                                                }}
                                            />
                                        </Box>

                                        {/* Info */}
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            color="text.primary"
                                            sx={{
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: 1,
                                                textAlign: 'center',
                                                mb: 1,
                                                fontSize: {
                                                    xs: '1.1rem',
                                                    md: '1.25rem',
                                                },
                                            }}
                                        >
                                            {person.name}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="primary.main"
                                            sx={{
                                                textAlign: 'center',
                                                fontWeight: 600,
                                                maxWidth: '90%',
                                                mx: 'auto',
                                                fontSize: {
                                                    xs: '0.9rem',
                                                    md: '0.95rem',
                                                },
                                            }}
                                        >
                                            {person.role}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                textAlign: 'center',
                                                mt: 1,
                                                fontSize: {
                                                    xs: '0.8rem',
                                                    md: '0.85rem',
                                                },
                                                lineHeight: 1.4,
                                                maxWidth: '95%',
                                                mx: 'auto',
                                            }}
                                        >
                                            {person.education}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </Box>
            </Container>
        </SectionContainer>
    );
};

export default TeamSection;

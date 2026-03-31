import { useState, useEffect } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { staggerContainer, fadeInUpRight } from '@/theme/animations';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import ServiceCard from '@/components/common/Cards/ServiceCard';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';

// const MotionBox = motion.create(Box);

const ServicesSection = ({ services }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading && (!services || services.length === 0)) return null;
    const items = loading ? Array.from(new Array(4)) : services;

    const gold = theme.palette.primary.main;
    const textOnGold = theme.palette.primary.contrastText;
    const paper = theme.palette.background.paper;
    const nextBg = theme.palette.background.default;

    return (
        <SectionContainer
            id="servicios"
            aria-labelledby="servicios-title"
            background={gold}
            animation={fadeInUpRight}
        >
            <Box
                sx={{
                    pt: { xs: 8, sm: 12, md: 16 },
                    px: { xs: 2, sm: 8, md: 12 },
                    pb: { xs: 12, sm: 18, md: 24, lg: 32 },
                }}
            >
                {/* Título de la sección */}
                <TitleSection
                    textOverline="lo que ofrecemos"
                    colorOverline={textOnGold}
                    texth2="nuestros servicios"
                    animation={fadeInUpRight}
                />
                <Box
                    component={motion.div}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Grid container spacing={{ xs: 2, md: 4 }}>
                        {items.map((item, index) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={
                                    loading
                                        ? `skeleton-${index}`
                                        : `service-${index}`
                                }
                            >
                                <ServiceCard
                                    item={loading ? null : item}
                                    loading={loading}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    zIndex: 5,
                }}
            >
                <LayeredWaves fill1={paper} fill2={nextBg} />
            </Box>
        </SectionContainer>
    );
};

export default ServicesSection;

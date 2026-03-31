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

    // Si no cargando y no hay servicios, no mostramos nada
    if (!loading && (!services || services.length === 0)) return null;

    const items = loading ? [1, 2, 3, 4] : services;

    const gold = theme.palette.primary.main;
    const text = theme.palette.background.default;
    const paper = theme.palette.background.paper;

    return (
        <SectionContainer
            id="servicios"
            background={gold}
            animation={fadeInUpRight}
        >
            <Box
                sx={{
                    pt: { xs: 8 },
                    px: { xs: 2, sm: 6, md: 12 },
                    pb: { xs: 12, sm: 18, md: 24 },
                }}
            >
                {/* Título de la sección */}
                <TitleSection
                    textOverline="lo que ofrecemos"
                    colorOverline={text}
                    texth2="nuestros servicios"
                    animation={fadeInUpRight}
                />
                <Box
                    component={motion.div}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Grid container spacing={3}>
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
            <LayeredWaves fill1={paper} fill2={text} />
        </SectionContainer>
    );
};

export default ServicesSection;

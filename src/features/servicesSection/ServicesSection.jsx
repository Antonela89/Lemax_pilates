import { Box, Grid, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { staggerContainer, fadeInUpRight } from '@/theme/animations';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import ServiceCard from '@/components/common/Cards/ServiceCard';

// const MotionBox = motion(Box);

const ServicesSection = ({ services }) => {
    const theme = useTheme();

    const gold = theme.palette.primary.main;
    const text = theme.palette.background.default;

    if (!services) return null;
    return (
        <SectionContainer background={gold} animation={fadeInUpRight}>
            <Box
                sx={{
                    px: { xs: 2, md: 6 },
                    pb: { xs: 8, md: 16 },
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
                        {services.map((item, i) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={i}>
                                <ServiceCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </SectionContainer>
    );
};

export default ServicesSection;

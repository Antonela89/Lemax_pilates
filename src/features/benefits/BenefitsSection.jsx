import { useState, useEffect } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { staggerContainer, fadeInUpLeft } from '@/theme/animations';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import BenefitCard from '@/components/common/Cards/BenefitCard';
import TripleGlowWave from '@/components/common/Divider/TripleGlowWave';
import LayeredWaves from '@/components/common/Divider/LayeredWaves';

const BenefitsSection = ({ benefits }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading && (!benefits || benefits.length === 0)) return null;
    const items = loading ? Array.from(new Array(8)) : benefits;

    const bgNextSection = theme.palette.background.alternate;
    const goldAccent = theme.palette.primary.main;
    const bgTop = theme.palette.background.default;
    const bgBottom = theme.palette.background.paper;

    return (
        <SectionContainer
            id="beneficios"
            background="background.default"
            animation={fadeInUpLeft}
            sx={{ position: 'relative', zIndex: 2, overflow: 'visible !important' }}
            aria-labelledby="benefits-title"
        >
            <TripleGlowWave colorTop={bgTop} colorBottom={bgBottom} sx={{ zIndex: 100 }} />
            
            <Box
                sx={{
                    pt: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24 },
                    px: { xs: 2, sm: 6, md: 12, lg: 16, xl: 20 },
                    pb: { xs: 12, sm: 18, md: 24, lg: 32, xl: 40 },
                    bgcolor: 'background.paper',
                    mt: '-1px',
                }}
            >
                {/* Título de la sección */}
                <TitleSection
                    id="benefits-title"
                    textOverline="¿por qué elegirnos?"
                    texth2="beneficios"
                    animation={fadeInUpLeft}
                />

                <Box
                    component={motion.div}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {items.map((item, index) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={loading ? `skeleton-${index}` : item.id}
                            >
                                <BenefitCard
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
                <LayeredWaves fill1={goldAccent} fill2={bgNextSection} />
            </Box>
        </SectionContainer>
    );
};

export default BenefitsSection;

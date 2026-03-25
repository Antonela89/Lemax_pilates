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

    const bgNextSection = theme.palette.background.alternate;
    const goldAccent = theme.palette.primary.main;
    const bgTop = theme.palette.background.default;
    const bgBottom = theme.palette.background.paper;

    return (
        <SectionContainer
            background="background.default"
            animation={fadeInUpLeft}
            sx={{ position: 'relative', zIndex: 2 }}
        >
            <TripleGlowWave colorTop={bgTop} colorBottom={bgBottom} />
            <Box
                sx={{
                    px: { xs: 8, md: 12 },
                    pb: { xs: 8, md: 16 },
                    bgcolor: 'background.paper',
                    mt: '-1px',
                }}
            >
                {/* Título de la sección */}
                <TitleSection
                    textOverline="¿por qué elegirnos?"
                    texth2="beneficios"
                    animation={fadeInUpLeft}
                />

                <Box component={motion.div} variants={staggerContainer}>
                    <Grid container spacing={3}>
                        {benefits.map((item) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                                <BenefitCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <LayeredWaves fill1={goldAccent} fill2={bgNextSection} />
        </SectionContainer>
    );
};

export default BenefitsSection;

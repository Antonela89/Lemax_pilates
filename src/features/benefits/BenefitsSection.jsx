import { Box, Grid } from '@mui/material';
import { motion } from 'motion/react';
import { staggerContainer, fadeInUpLeft } from '@/theme/animations';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import BenefitCard from '@/components/common/Cards/BenefitCard';

const BenefitsSection = ({ benefits }) => {
    return (
        <SectionContainer background="paper" animation={fadeInUpLeft}>
            {/* Título de la sección */}
            <TitleSection
                overline="¿por qué elegirnos?"
                h2="beneficios"
                animation={fadeInUpLeft}
            />

            <Box component={motion.div} variants={staggerContainer}>
                <Grid container spacing={3}>
                    {benefits.map((item) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                            <BenefitCard
                                title={item.title}
                                desc={item.description}
                                iconName={item.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionContainer>
    );
};

export default BenefitsSection;

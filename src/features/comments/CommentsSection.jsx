import { Box, Grid } from '@mui/material';
import { motion } from 'motion/react';
import { staggerContainer, fadeInUpLeft } from '@/theme/animations';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import CommentCard from '@/components/common/Cards/CommentCard';
// import TripleGlowWave from '@/components/common/Divider/TripleGlowWave';
// import GlowWave from '@/components/common/Divider/GlowWave';

const CommentsSection = ({ reviews }) => {
  // const theme = useTheme();

  // const colorDivider = theme.palette.divider
    return (
        <SectionContainer background="default" animation={fadeInUpLeft}>
          {/* <GlowWave background={colorDivider}/> */}
            <Box
                sx={{
                    px: { xs: 8, md: 12 },
                    pb: { xs: 8, md: 16 },
                    bgcolor: 'divider',
                }}
            >
                {/* Título de la sección */}
                <TitleSection
                    overline="¿qué opinan de nosotros?"
                    h2="comentarios"
                    animation={fadeInUpLeft}
                />

                <Box
                    component={motion.div}
                    variants={staggerContainer}
                    // sx={{ px: { xs: 8, md: 12 } }}
                >
                    <Grid container spacing={3}>
                        {reviews.map((item) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                                <CommentCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            {/* <TripleGlowWave fill1={colorDivider}> */}
        </SectionContainer>
    );
};
export default CommentsSection;

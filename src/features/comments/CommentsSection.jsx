import { Box, Grid, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { staggerContainer, fadeInUpLeft } from '@/theme/animations';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import CommentCard from '@/components/common/Cards/CommentCard';
import TripleGlowWave from '@/components/common/Divider/TripleGlowWave';

const CommentsSection = ({ reviews }) => {
    const theme = useTheme();

    const alternate = theme.palette.background.alternate;
    const basic = theme.palette.background.default;


    return (
        <SectionContainer background="default" animation={fadeInUpLeft}>
            <Box
                sx={{
                    pt: { xs: 8 },
                    px: { xs: 2, md: 6 },
                    pb: { xs: 8, md: 16 },
                    bgcolor: 'background.alternate',
                }}
            >
                {/* Título de la sección */}
                <TitleSection
                    textOverline="¿qué opinan de nosotros?"
                    texth2="comentarios"
                    animation={fadeInUpLeft}
                />

                <Box
                    component={motion.div}
                    variants={staggerContainer}
                    sx={{ px: { xs: 8, md: 12 } }}
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
            <TripleGlowWave colorTop={alternate} colorBottom={basic} reverse />
        </SectionContainer>
    );
};
export default CommentsSection;

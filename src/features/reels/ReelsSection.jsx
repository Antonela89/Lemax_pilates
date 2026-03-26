import { useState, useEffect } from 'react';
import { Box, Container, Button, useTheme, Typography } from '@mui/material';
import { motion } from 'motion/react';
import InstagramIcon from '@mui/icons-material/Instagram';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import Marquee from '@/components/common/Sliders/Marquee';
import ReelCard from '@/components/common/Cards/ReelCard';
import { fadeInUpLeft } from '@/theme/animations';

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);

const ReelsSection = () => {
    const theme = useTheme();
    const [reels, setReels] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const BEHOLD_URL = import.meta.env.VITE_BEHOLD_URL;
    const REELS_COUNT = 8;

    const bgDefault = theme.palette.background.default;
    const bgAlternate = theme.palette.background.alternate;

    useEffect(() => {
        // Simulación o llamada real a Behold.so
        const fetchInstagram = async () => {
            try {
                const response = await fetch('BEHOLD_URL');
                const data = await response.json();
                setReels(data.slice(0, REELS_COUNT));

                // MOCK para desarrollo
                // setTimeout(() => {
                //     setReels(
                //         Array.from({ length: REELS_COUNT }, (_, i) => ({
                //             id: i,
                //             permalink: '#',
                //             mediaUrl: '',
                //         }))
                //     );
                //     setLoading(false);
                // }, 2000);
            } catch (error) {
                console.error('Error cargando Instagram', error);
                setError(true);
                setLoading(false);
            }
        };

        fetchInstagram();
    }, []);

    if (!BEHOLD_URL) {
        console.error('Falta la URL de Behold en el archivo .env');
        setLoading(false);
        return;
    }

    const itemsToRender = loading ? Array.from(new Array(REELS_COUNT)) : reels;

    const background = `linear-gradient(to bottom, 
                    ${bgDefault} 0%, 
                    ${bgAlternate} 15%, 
                    ${bgAlternate} 85%, 
                    ${bgDefault} 100%
                )`;

    if (error) {
        return (
            <SectionContainer
                id="instagram"
                background="transparent"
                sx={{
                    background: background,
                    py: 0,
                }}
            >
                <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
                    <InstagramIcon
                        sx={{ fontSize: 50, color: 'primary.main', mb: 2 }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                        ¡Visitá nuestro Instagram para ver más!
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                        No pudimos cargar los Reels en este momento, pero podés
                        encontrar todos nuestros tips de bienestar en nuestra
                        cuenta oficial.
                    </Typography>
                    <Button
                        variant="contained"
                        href="https://www.instagram.com/lemax.centrodepilates/"
                        target="_blank"
                    >
                        Ir a @lemax.centrodepilates
                    </Button>
                </Container>
            </SectionContainer>
        );
    }

    return (
        <SectionContainer
            id="instagram"
            background="transparent"
            sx={{
                background: background,
                py: 0,
            }}
        >
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <TitleSection
                    textOverline="Social Media"
                    texth2="Le Max en Instagram"
                    animation={fadeInUpLeft}
                />

                <Box sx={{ mt: 6, width: '100%' }}>
                    <Marquee
                        items={itemsToRender}
                        speed="100s"
                        itemWidth={{ xs: '250px', md: '320px' }}
                        renderItem={(post) => (
                            <ReelCard post={post} isLoading={loading} />
                        )}
                    />
                </Box>

                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    sx={{ mt: 6, textAlign: 'center' }}
                >
                    <MotionButton
                        variants={fadeInUpLeft}
                        variant="contained"
                        startIcon={<InstagramIcon />}
                        href="https://www.instagram.com/lemax.centrodepilates/"
                        target="_blank"
                        sx={{ px: 4, py: 1.5, fontWeight: 700 }}
                    >
                        Seguinos en Instagram
                    </MotionButton>
                </MotionBox>
            </Container>
        </SectionContainer>
    );
};

export default ReelsSection;

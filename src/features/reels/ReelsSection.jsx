import { useState, useEffect } from 'react';
import { Box, Container, Button, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import SectionContainer from '@/components/common/SectionContainer/SectionContainer';
import TitleSection from '@/components/common/TitleSection/TitleSection';
import ReelCard from '@/components/common/Cards/ReelCard';
import { fadeInUpLeft } from '@/theme/animations';

const ReelsSection = () => {
    const [reels, setReels] = useState([]);
    const [loading, setLoading] = useState(true);

    const BEHOLD_URL = import.meta.env.VITE_BEHOLD_URL;
    const REELS_COUNT = 4;

    useEffect(() => {
        // Simulación o llamada real a Behold.so
        const fetchInstagram = async () => {
            try {
                // const response = await fetch('TU_URL_DE_BEHOLD');
                // const data = await response.json();
                // setReels(data.slice(0, REELS_COUNT));

                // MOCK para desarrollo
                setTimeout(() => {
                    setReels(
                        Array.from({ length: REELS_COUNT }, (_, i) => ({
                            id: i,
                            permalink: '#',
                            mediaUrl: '',
                        }))
                    );
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error('Error cargando Instagram', error);
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

    return (
        <SectionContainer id="instagram" background="background.paper">
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <TitleSection
                    textOverline="Social Media"
                    texth2="Le Max en Instagram"
                    animation={fadeInUpLeft}
                />

                <Grid container spacing={3} sx={{ mt: 4 }}>
                    {itemsToRender.map((post, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <ReelCard
                                post={loading ? null : post}
                                isLoading={loading}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Button
                        variant="outlined"
                        startIcon={<InstagramIcon />}
                        href="https://www.instagram.com/lemax.centrodepilates/"
                        target="_blank"
                        sx={{ px: 4, py: 1.5, fontWeight: 700 }}
                    >
                        Seguinos en Instagram
                    </Button>
                </Box>
            </Container>
        </SectionContainer>
    );
};

export default ReelsSection;

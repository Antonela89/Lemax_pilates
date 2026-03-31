import { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Button,
    useTheme,
    Typography,
    useMediaQuery,
    alpha,
} from '@mui/material';
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

    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    );

    const BEHOLD_URL = import.meta.env.VITE_BEHOLD_URL;
    const REELS_COUNT = 8;

    const bgDefault = theme.palette.background.default;
    const bgAlternate = theme.palette.background.alternate;

    useEffect(() => {
        // Simulación o llamada real a Behold.so
        const fetchInstagram = async () => {
            if (!BEHOLD_URL) {
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(BEHOLD_URL);
                if (!response.ok) throw new Error();
                const data = await response.json();
                setReels(data.slice(0, REELS_COUNT));
                setLoading(false);

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
    }, [BEHOLD_URL]);

    if (!BEHOLD_URL) return null;

    const itemsToRender = loading ? Array.from(new Array(REELS_COUNT)) : reels;

    const backgroundGradient = `linear-gradient(to bottom, 
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
                aria-labelledby="instagram-title"
                sx={{
                    background: backgroundGradient,
                    py: 0,
                }}
            >
                <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                    <TitleSection
                        id="instagram-title"
                        textOverline="Social Media"
                        texth2="Le Max en Instagram"
                        animation={fadeInUpLeft}
                    />

                    {error ? (
                        /* Fallback elegante si falla la API */
                        <Box sx={{ textAlign: 'center', py: 6 }}>
                            <Typography
                                variant="h6"
                                sx={{ mb: 2, fontWeight: 700 }}
                            >
                                Seguinos en Instagram para ver nuestro contenido
                                diario
                            </Typography>
                            <MotionBox
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                sx={{ mt: 8, textAlign: 'center' }}
                            >
                                <MotionButton
                                    variants={fadeInUpLeft}
                                    variant="contained"
                                    startIcon={<InstagramIcon />}
                                    href="https://www.instagram.com/lemax.centrodepilates/"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Ver perfil completo de LeMax en Instagram"
                                    sx={{
                                        px: 6,
                                        py: 1.8,
                                        fontWeight: 800,
                                        borderRadius: '50px',
                                        boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
                                    }}
                                >
                                    Ver más en Instagram
                                </MotionButton>
                            </MotionBox>
                        </Box>
                    ) : (
                        <Box sx={{ mt: 6, width: '100%' }}>
                            <Marquee
                                items={itemsToRender}
                                speed={prefersReducedMotion ? '0s' : '100s'}
                                itemWidth={{ xs: '260px', md: '320px' }}
                                renderItem={(post) => (
                                    <ReelCard post={post} isLoading={loading} />
                                )}
                            />
                        </Box>
                    )}
                </Container>
            </SectionContainer>
        );
    }
};

export default ReelsSection;

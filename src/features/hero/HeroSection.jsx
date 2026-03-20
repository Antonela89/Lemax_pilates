import { Box, Typography, Button, Stack } from '@mui/material';
import heroImg from '@/assets/images/hero/hero.webp';

const HeroSection = () => {
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' },
                minHeight: { md: '80vh' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                bgcolor: 'background.default',
            }}
        >
            {/* CONTENEDOR DE IMAGEN */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '400px', md: '100%' },
                }}
            >
                <Box
                    component="img"
                    src={heroImg}
                    alt="Clase de Pilates Reformer Le Max"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </Box>
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Stack spacing={1} sx={{ maxWidth: '700px' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#C5A069',
                            fontWeight: 'bold',
                            letterSpacing: 2,
                        }}
                    >
                        CENTRO DE PILATES
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem'},
                            fontWeight: 700,
                            textTransform: 'uppercase',
                        }}
                    >
                        Transforma tu cuerpo y mente
                    </Typography>
                    <Typography variant="subtitle1">
                        En Le Max, combinamos técnicas de Pilates clásico y
                        contemporáneo para ofrecerte una experiencia de
                        entrenamiento única y personalizada.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button variant="contained" size="large">
                            Reservar Clase
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default HeroSection;

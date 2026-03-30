import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Link,
} from '@mui/material';
// Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { iconMap } from '@/utils/navigationUtils';
// Components
import {FooterColumn} from './FooterColumn';
import {FooterItem} from './FooterItem';
export default function Footer({data}) {
  const currentYear = new Date().getFullYear();

  const businessName = data?.businessName || "Le Max Pilates";
  const nameParts = businessName.split(' ');
  const navLinks = data?.navbar || [];

  // FUNCIÓN HORARIOS
  const getScheduleInfo = (schedule) => {
    const days = Object.keys(schedule);
    if (!days.length) return '';

    const allHours = Object.values(schedule).flat().sort();
    const firstHour = allHours[0];
    const lastHour = allHours[allHours.length - 1];

    const firstDay = days[0];
    const lastDay = days[days.length - 1];

    return `${firstDay} a ${lastDay}: ${firstHour} - ${lastHour}`;
  };

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        pt: { xs: 6, md: 10 },
        pb: 4,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1.2fr 1fr 1fr 1fr',
            },
            gap: { xs: 5, md: 5 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* BRANDING */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                letterSpacing: 4,
                fontWeight: 800,
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              {nameParts[0]}{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {nameParts.slice(1).join(' ')}
              </Box>
            </Typography>

            <Typography
              sx={{
                variant: "body2",
                mt: 3,
                fontStyle: 'italic',
                maxWidth: 300,
                mx: { xs: 'auto', md: 0 },
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.5,
                color: 'text.secondary',
              }}
            >
              Transforma tu bienestar a través del movimiento consciente.
            </Typography>

            {/* REDES */}
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  fontSize: '1rem',
                  mb: 0.5,
                }}
              >
                Seguinos en Redes
              </Typography>

              <Box 
              sx={{
                display: 'flex',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 1,
              }}>
                <IconButton
                  component="a"
                  href={data?.social?.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar nuestro perfil de Instagram"
                  sx={{
                    alignSelf: { xs: 'center', md: 'flex-start' },
                    color: 'text.secondary',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-4px) scale(1.15)',
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
                <IconButton
                  component="a"
                  href={data?.social?.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar nuestro perfil de Facebook"
                  sx={{
                    alignSelf: { xs: 'center', md: 'flex-start' },
                    color: 'text.secondary',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-4px) scale(1.15)',
                    },
                  }}
                >
                  <FacebookIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* EXPLORAR */}
          <FooterColumn title="Explorar">
            {navLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
              <Link
                key={link.label}
                href={link.path}
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                  py: 0.5,
                  color: 'text.secondary',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: 'text.primary',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                {IconComponent && <IconComponent sx={{ fontSize: '1.2rem', color: 'primary.main' }} />}
                  {link.label}
                </Link>
              );
})}
          </FooterColumn>

          {/* HORARIOS */}
          <FooterColumn title="Horarios">
            {data.locations.map((loc) => (
              <Box key={loc.id} sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  {loc.name}
                </Typography>

                <Typography
                variant="caption"
                  sx={{
                    color: 'text.secondary',
                    display: 'block',
                  }}
                >
                  {getScheduleInfo(loc.schedule)}
                </Typography>
              </Box>
            ))}
          </FooterColumn>

          {/* CONTACTO */}
          <FooterColumn title="Contacto">
            {data.locations.map((loc) => (
              <Box key={loc.id} sx={{ mb: 3 }}>
                <Typography
                variant="body2"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  {loc.name}
                </Typography>

                {/* Dirección clickeable */}
                <FooterItem 
                    icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
                    aria-label={`Ubicación de ${loc.name}`}
                >
                  <Link 
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    color="inherit"
                    underline="none"
                    sx={{ fontSize: '0.85rem' }}
                  >
                    {loc.address}
                  </Link>
                </FooterItem>
                <FooterItem 
                    icon={<PhoneIcon sx={{ fontSize: 18 }} />}
                >
                  <Link href={`tel:${loc.phone}`} color="inherit" underline="none" sx={{ fontSize: '0.85rem' }}>
                    {loc.phone}
                  </Link>
                </FooterItem>
              </Box>
            ))}
          </FooterColumn>
        </Box>

        <Divider sx={{ mt: 8, mb: 4 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            © {currentYear} <strong>{data.businessName}</strong>. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
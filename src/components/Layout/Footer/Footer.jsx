import React from 'react';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import HomeIcon from '@mui/icons-material/Home';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PlaceIcon from '@mui/icons-material/Place';
import GroupsIcon from '@mui/icons-material/Groups';
import MailIcon from '@mui/icons-material/Mail';

// Components
import FooterColumn from './FooterColumn';
import FooterItem from './FooterItem';

export default function Footer({data}) {
  const currentYear = new Date().getFullYear();

  // ICONOS NAVBAR
  const iconMap = {
    Home: <HomeIcon />,
    SelfImprovement: <SelfImprovementIcon />,
    Place: <PlaceIcon />,
    Groups: <GroupsIcon />,
    Instagram: <InstagramIcon />,
    Mail: <MailIcon />,
  };

  const navLinks = data.navbar.map((item) => ({
    name: item.label,
    href: item.path,
    icon: iconMap[item.icon],
  }));

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
              {data.businessName.split(' ')[0]}{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {data.businessName.split(' ')[1]}
              </Box>
            </Typography>

            <Typography
              sx={{
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
                Seguinos en Instagram
              </Typography>

              <IconButton
                component="a"
                href={data?.social?.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
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
            </Box>
          </Box>

          {/* EXPLORAR */}
          <FooterColumn title="Explorar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                  color: 'text.secondary',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: 'text.primary',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                {React.cloneElement(link.icon, {
                  sx: {
                    color: 'primary.main',
                    fontSize: '1.3rem',
                  },
                })}
                {link.name}
              </Link>
            ))}
          </FooterColumn>

          {/* HORARIOS */}
          <FooterColumn title="Horarios">
            {data.locations.map((loc) => (
              <Box key={loc.id} sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    color: 'text.primary',
                  }}
                >
                  {loc.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: 'text.secondary',
                    lineHeight: 1.4,
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
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    color: 'text.primary',
                  }}
                >
                  {loc.name}
                </Typography>

                {/* Dirección clickeable */}
                <FooterItem
                  component="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    loc.address
                  )}`}
                  target="_blank"
                  icon={<LocationOnIcon sx={{ color: 'primary.main' }} />}
                  sx={{
                    fontSize: '0.9rem',
                    color: 'text.secondary',
                    lineHeight: 1.4,
                    mb: 1,
                    textDecoration: 'none',
                  }}
                >
                  {loc.address}
                </FooterItem>

                {/* Teléfono clickeable */}
                <FooterItem
                  component="a"
                  href={`tel:${loc.phone}`}
                  icon={<PhoneIcon sx={{ color: 'primary.main' }} />}
                  sx={{
                    fontSize: '0.9rem',
                    color: 'text.secondary',
                    lineHeight: 1.4,
                    textDecoration: 'none',
                  }}
                >
                  {loc.phone}
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
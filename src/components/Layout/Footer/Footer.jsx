import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Link,
  Tooltip,
} from '@mui/material';

// Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PlaceIcon from '@mui/icons-material/Place';
import GroupsIcon from '@mui/icons-material/Groups';
import MailIcon from '@mui/icons-material/Mail';

// Animación
import { motion } from 'framer-motion';

// Components
import FooterColumn from './FooterColumn';
import FooterItem from './FooterItem';

const MotionBox = motion.create(Box);

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  // ICONOS NAVBAR
  const iconMap = {
    Home: <HomeIcon />,
    SelfImprovement: <SelfImprovementIcon />,
    Place: <PlaceIcon />,
    Groups: <GroupsIcon />,
    Instagram: <InstagramIcon />,
    WhatsApp: <WhatsAppIcon />,
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
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  letterSpacing: 1,
                }}
              >
                Seguinos
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  p: 1,
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Instagram */}
                <Tooltip title="Instagram" arrow>
                  <IconButton
                    component="a"
                    href={data?.social?.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-6px) scale(1.2)',
                        boxShadow:
                          '0 10px 25px rgba(225,48,108,0.4)',
                      },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>

                {/* Facebook */}
                <Tooltip title="Facebook" arrow>
                  <IconButton
                    component="a"
                    href={data?.social?.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-6px) scale(1.2)',
                        boxShadow:
                          '0 10px 25px rgba(24,119,242,0.4)',
                      },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                </Tooltip>

                {/* Mail */}
                <Tooltip title="Enviar email" arrow>
                  <IconButton
                    component="a"
                    href={`mailto:${data?.social?.email}`}
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-6px) scale(1.2)',
                        boxShadow:
                          '0 10px 25px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </MotionBox>
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
                  '&:hover': {
                    color: 'text.primary',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                {React.cloneElement(link.icon, {
                  sx: { color: 'primary.main', fontSize: '1.3rem' },
                })}
                {link.name}
              </Link>
            ))}
          </FooterColumn>

          {/* HORARIOS */}
          <FooterColumn title="Horarios">
            {data.locations.map((loc) => (
              <Box key={loc.id} sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600 }}>
                  {loc.name}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                  {getScheduleInfo(loc.schedule)}
                </Typography>
              </Box>
            ))}
          </FooterColumn>

          {/* CONTACTO */}
          <FooterColumn title="Contacto">
            {data.locations.map((loc) => (
              <Box key={loc.id} sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600 }}>
                  {loc.name}
                </Typography>

                <FooterItem
                  component="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    loc.address
                  )}`}
                  target="_blank"
                  icon={<LocationOnIcon sx={{ color: 'primary.main' }} />}
                >
                  {loc.address}
                </FooterItem>

                <FooterItem
                  component="a"
                  href={`tel:${loc.phone}`}
                  icon={<PhoneIcon sx={{ color: 'primary.main' }} />}
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
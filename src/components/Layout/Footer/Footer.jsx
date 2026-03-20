import React from "react";
import { Box, Container, Typography, IconButton, Divider, Link } from "@mui/material";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import GroupsIcon from "@mui/icons-material/Groups";
import ForumIcon from "@mui/icons-material/Forum";

// Components
import FooterColumn from "./FooterColumn";
import FooterItem from "./FooterItem";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Inicio", href: "#hero", icon: <HomeIcon /> },
    { name: "Servicios", href: "#servicios", icon: <FitnessCenterIcon /> },
    { name: "Beneficios", href: "#beneficios", icon: <AutoAwesomeIcon /> },
    { name: "Locales", href: "#locales", icon: <MapsHomeWorkIcon /> },
    { name: "Staff", href: "#staff", icon: <GroupsIcon /> },
    { name: "Comentarios", href: "#comentarios", icon: <ForumIcon /> },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pt: { xs: 6, md: 10 },
        pb: 4,
        borderTop: 1,
        borderColor: "divider", 
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.2fr 1fr 1fr 1fr",
            },
            gap: { xs: 5, md: 6 },
            textAlign: { xs: "center", md: "left" },
          }}
        >

          {/* BRANDING */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                letterSpacing: 4,
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              LEMAX{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                PILATES
              </Box>
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 2,
                fontStyle: "italic",
                maxWidth: 300,
                mx: { xs: "auto", md: 0 },
              }}
            >
              "Transforma tu bienestar a través del movimiento consciente."
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
              }}
            >
              {[InstagramIcon, FacebookIcon, WhatsAppIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              ))}
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 1.5,
                  color: "text.secondary",
                  "&:hover": {
                    color: "text.primary",
                    transform: "translateX(5px)",
                  },
                }}
              >
                {React.cloneElement(link.icon, {
                  sx: { color: "primary.main", fontSize: "1.3rem" },
                })}
                {link.name}
              </Link>
            ))}
          </FooterColumn>

          {/* HORARIOS */}
          <FooterColumn title="Horarios">
            <Typography variant="body2" color="text.secondary">
              Lunes - Viernes: 7:00 - 21:00
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sábados: 9:00 - 14:00
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Domingos: Cerrado
            </Typography>
          </FooterColumn>

          {/* CONTACTO */}
          <FooterColumn
            title="Contacto"
            sx={{
              gridColumn: { xs: "1", sm: "1 / -1", md: "auto" }, 
            }}
          >
            <FooterItem icon={<LocationOnIcon sx={{ color: "primary.main" }} />}>
              Av. Principal 123, CABA
            </FooterItem>

            <FooterItem icon={<PhoneIcon sx={{ color: "primary.main" }} />}>
              +54 123 456 7890
            </FooterItem>

            <FooterItem icon={<EmailIcon sx={{ color: "primary.main" }} />}>
              info@lemax.com
            </FooterItem>
          </FooterColumn>
        </Box>

        <Divider sx={{ mt: 8, mb: 4 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption" color="text.secondary">
            © {currentYear} <strong>LEMAX PILATES</strong>. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
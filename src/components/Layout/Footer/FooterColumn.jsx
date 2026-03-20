import { Box, Typography } from "@mui/material";

export default function FooterColumn({ title, children, sx = {} }) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: { md: 180 },
        ...sx,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          letterSpacing: 2,
          mb: 3,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          pb: 1,
          textTransform: "uppercase",
          fontSize: "0.85rem",
          textAlign: { xs: "center", md: "left" }, 
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          alignItems: { xs: "center", md: "flex-start" },
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
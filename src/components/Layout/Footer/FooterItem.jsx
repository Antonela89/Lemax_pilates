import { Box, Typography } from "@mui/material";

export default function FooterItem({ icon, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        gap: 1.5,
        color: "text.secondary",
        width: "100%", 
      }}
    >
      {icon}

      <Typography
        variant="body2"
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        {children}
      </Typography>
    </Box>
  );
}
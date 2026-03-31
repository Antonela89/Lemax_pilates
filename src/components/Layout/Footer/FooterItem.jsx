import { Box, Typography } from "@mui/material";

export function FooterItem({ icon, children, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        gap: 1.5,
        color: "text.secondary",
        width: "100%",
        textDecoration: "none",
        transition: "all 0.25s ease",
        cursor: props.href ? "pointer" : "default", 

        "&:hover": props.href && {
          color: "primary.main",
          transform: "translateX(4px)", 
        },

        ...props.sx,
      }}
    >
      {icon}

      <Typography
        variant="body2"
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default FooterItem;
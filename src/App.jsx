import { useState, useEffect, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Button } from "@mui/material";

import { getDesignTokens } from "@/theme/theme";
// import COMPONENTES
import Footer from "@/components/Layout/Footer/Footer";

function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${mode}-mode`);
  }, [mode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline normaliza el CSS y aplica el color de fondo del tema */}
      <CssBaseline />

      {/* Prueba de tema - Borrar cuando se coloque el cambio de tema en el navbar*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >

        {/*MAIN CONTENT */}
        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h1" color="primary" gutterBottom>
            LEMAX PILATES
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Find your balance, strengthen your core.
          </Typography>

          <Button variant="contained" onClick={toggleColorMode}>
            Switch to {mode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Box>

        {/*FOOTER */}
        {/* <WaveDivider variant="gold"/> */}
        <Footer />

      </Box>
    </ThemeProvider>
  );
}

export default App;
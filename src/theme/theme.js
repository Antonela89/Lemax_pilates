const primaryGold = '#C5A069';

/**
 * Define los tokens de diseño para el tema de MUI.
 * @param {'light' | 'dark'} mode - El modo de color actual.
 */
export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: primaryGold,
            light: '#D4B483',
            dark: '#A37F4D',
            contrastText: mode === 'light' ? '#fff' : '#1A1A18',
        },
        background: {
            default: mode === 'light' ? '#FAF9F6' : '#1A1A18',
            paper: mode === 'light' ? '#F2EFE9' : '#252522',
        },
        text: {
            primary: mode === 'light' ? '#2D2926' : '#E8E6E1',
            secondary: mode === 'light' ? '#5E5A53' : '#A3A199',
        },
        divider:
            mode === 'light'
                ? 'rgba(197, 160, 105, 0.2)'
                : 'rgba(197, 160, 105, 0.1)',
    },
    typography: {
        fontFamily: '"Lato", "Arial", sans-serif',
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.02em', 
        },
        h2: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700 },
        body1: {
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.05em',
        },
    },
    shape: {
        borderRadius: 12, 
    },
});

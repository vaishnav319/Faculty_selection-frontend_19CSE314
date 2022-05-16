import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#FFD223",
      dark: "#efbe00",
      blue: "#227AEB",
      green: "#37B57E",
    },
    secondary: {
      main: "#1B1B1B",
      light: "#F9F8F7",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const { palette } = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: palette.primary.main,
        color: "white",
        fontWeight: 600,
        fontSize: "0.95rem",
        letterSpacing: "0.25px",
        height: "2.725rem",
        "&:hover": {
          backgroundColor: palette.primary.dark,
        },
      },
    },
    MuiToggleButton: {
      root: {
        backgroundColor: palette.primary.main,
        color: "white",
        fontWeight: 600,
        fontSize: "0.95rem",
        letterSpacing: "0.25px",
        height: "2.725rem",
        "&:hover": {
          backgroundColor: palette.primary.main,
        },
      },
    },
    MuiContainer: {
      root: {
        maxWidth: "90% !important",
      },
    },
    MuiInputBase: {
      root: {
        fontSize: "0.95rem",
        "& input": {
          padding: "14.5px 15px",
        },
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "red",
      },
      multiline: {
        padding: "14.5px 15px",
      },
    },
    MuiInputLabel: {
      outlined: {
        fontSize: "0.95rem",
        transform: "translate(15px, 15px) scale(1)",
      },
    },

    MuiSelect: {
      root: {
        padding: "14.5px 15px",
      },
    },

    MuiAutocomplete: {
      popper: {
        fontSize: "2rem",
      },
    },

    MuiPaper: {
      elevation1: {
        borderRadius: 0,
        boxShadow: "0px 4px 24px rgba(34, 41, 47, 0.1)",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: "2.25rem",
        "& svg": {
          fontSize: "1.35rem",
        },
        "& img": {
          width: "1.35rem",
          height: "1.35rem",
        },
      },
    },
    MuiTypography: {
      h1: {
        fontSize: "2rem",
        fontWeight: 700,
      },

      h2: {
        fontSize: "1.85rem",
        fontWeight: 600,
      },

      h3: {
        fontSize: "1.1rem",
        fontWeight: 600,
        letterSpacing: 0.8,
      },

      h4: {
        fontSize: "1.05rem",
        fontWeight: 700,
        letterSpacing: 0.2,
      },

      h5: {
        fontSize: "1.05rem",
        fontWeight: 500,
      },

      h6: {
        fontSize: "1rem",
        fontWeight: 500,
      },

      body1: {
        fontSize: "0.95rem",
        fontWeight: 500,
        letterSpacing: 0.2,
        wordSpacing: 1,
        lineHeight: 1.7,
      },

      body2: {
        fontSize: "0.875rem",
        fontWeight: 500,
        letterSpacing: 0.2,
        wordSpacing: 1,
        lineHeight: 1.7,
      },
    },
  },
};

export default theme;

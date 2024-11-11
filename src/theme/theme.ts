export const theme = {
  colors: {
    primary: "#F4364C",
    background: "#ffffff",
    text: {
      primary: "#000000",
      secondary: "#666666",
      light: "#7D7D82",
    },
    input: {
      background: "#F9F8F7",
    },
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  typography: {
    fontFamily: {
      regular: "HKNova-Regular",
      bold: "HKNova-Bold",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
  },
  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
};

export type Theme = typeof theme;

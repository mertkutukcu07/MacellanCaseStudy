export const theme = {
  colors: {
    primary: "#F4364C",
    background: "#ffffff",
    text: {
      primary: "#15151E",
      secondary: "#666666",
      light: "#7D7D82",
    },
    input: {
      background: "#F9F8F7",
    },
    common: {
      white: "#ffffff",
      black: "#15151E",
      border: "#ECEBE8",
      stroke: "rgba(255, 255, 255, 0.05)",
    },
    point: {
      background: "#FFDD99",
    },
    recommendAmount: {
      stroke: "#ECEBE8",
      selectedAmount: "rgba(244, 54, 76, 0.1)",
    },
    accountMovements: {
      iconBackground: "#F9F8F7",
      topUpText: "#0E968B",
    },
  },
  spacing: {
    xxxs: "2px",
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
    xxxl: "48px",
    xxxxl: "56px",
    xxxxxl: "64px",
    xxxxxxl: "72px",
  },
  typography: {
    fontFamily: {
      regular: "HKNova-Regular",
      bold: "HKNova-Bold",
    },
    fontSize: {
      xxxs: "10px",
      xxs: "12px",
      xs: "13px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      xxl: "24px",
      xxxl: "32px",
      xxxxl: "40px",
      xxxxxl: "48px",
      xxxxxxl: "56px",
    },
  },
  borderRadius: {
    sm: "8px",
    md: "13px",
    lg: "16px",
    full: "9999px",
  },
};

export type Theme = typeof theme;

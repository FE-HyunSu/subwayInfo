import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    line1: "#123089",
    line2: "#5db642",
    line3: "#eb6b3d",
    line4: "#4272d0",
    line5: "#7f40a8",
    line6: "#8d5420",
    line7: "#606e1f",
    line8: "#d8396d",
    line9: "#bda13c",
    lineSin: "#a04340",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

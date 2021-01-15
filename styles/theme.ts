import { textSnippets } from "./textSnippets";

const dark  = {
  primary1: "#232931",
  primary2: "#393e46",
  text: "#EEEEEE",
  shadow: "#393e46",
  border: "#F5F5F5",
};

const light = {
  primary1: "#FFFFFF",
  primary2: "#F5F5F5",
  text: "#515864",
  shadow: "#515864cc",
  border: "#51586499",
};

const theme = {
  light,
  ...dark,
  primary3: "#4ECCA3",
  primary4: "#EEEEEE",
  primary5: "#4fadc1",
  secondary: "#3f4447",
  secondary1: "#474c50",
  grey1: "#1F2933",
  grey2: "#3E4C59",
  grey3: "#7B8794",
  grey4: "#CDD7E3",
  grey5: "#F0F4F8",
  grey6: "#DCE1E7",
  black: "#000000",
  white: "#FFFFFF",
  success: "#2DCCA7",
  warning: "#F7D070",
  error: "#D64545",

  mobileBreakPoint: {
    XSP: `320px`,
    SP: `380px`,
    M: `420px`,
    L: `560px`,
  },

  // Responsive Breakpoints
  breakPoint: {
    // Phone's portrait mode usually ranges from 360px - 640px
    SM: `640px`,
    MD: `780px`,
    SL: `900px`,
    LG: `1024px`,
    XL: `1280px`,
    EXL: `1400px`,
  },

  ...textSnippets,
} as const;

export { theme };

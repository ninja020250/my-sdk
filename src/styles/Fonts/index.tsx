import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Montserrat, sans-serif';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Montserrat, sans-serif';
      font-style: medium;
      font-weight: 500;
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Montserrat, sans-serif';
      font-style: semibold;
      font-weight: 600;
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@600&display=swap');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Montserrat, sans-serif';
      font-style: bold;
      font-weight: 700;
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
      `}
  />
);

export default Fonts;

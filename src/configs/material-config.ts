import { createTheme } from '@mui/material';
import SVN_Sofia_Pro_Regular from '~/assets/fonts/SVN-SofiaPro-Regular.5b3d1be43dce9b034c9f.woff2';
import SVN_Sofia_Pro_Medium from '~/assets/fonts/SVN-SofiaPro-Medium.f29daefe0725dbae93c7.woff2';

const SVNSofiaProRegular = {
  fontFamily: 'SVN-SofiaPro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `local('SVN-SofiaPro'), local('SVN-SofiaPro-Regular'), url(${SVN_Sofia_Pro_Regular}) format('woff2')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const SVNSofiaProMedium = {
  fontFamily: 'SVN-SofiaPro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: `local('SVN-SofiaPro'), local('SVN-SofiaPro-Medium'), url(${SVN_Sofia_Pro_Medium}) format('woff2')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
  typography: {
    fontFamily: '"SVN-SofiaPro"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [{ '@font-face': SVNSofiaProRegular }, { '@font-face': SVNSofiaProMedium }],
        'html, body': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          userSelect: 'none',
        },
      },
    },
  },
});

// ::-webkit-scrollbar {
//   background-color: rgba(0, 0, 0, 0);
//   width: 12px;
//   height: 12px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   background-color: rgb(241, 243, 245);
//   border-radius: 32px;
// }

// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background-color: rgb(215, 219, 223);
//   border-radius: 32px;
//   border: 2px solid rgb(241, 243, 245);
// }

export default theme;

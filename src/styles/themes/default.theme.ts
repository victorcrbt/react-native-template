import { DefaultTheme } from 'styled-components/native';

const defaultTheme: DefaultTheme = {
  colors: {
    primary: {
      main: '#DA4167',
      dark: '#c0264c',
      light: '#ea95aa',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#D9B657',
      dark: '#a68426',
      light: '#ecdbac',
      contrast: '#ffffff',
    },
    tertiary: {
      main: '#365AD9',
      dark: '#8ba0e9',
      light: '#1b348d',
      contrast: '#ffffff',
    },
    background: {
      main: '#fdfdfd',
      dark: '#c5c5c5',
      light: '#ffffff',
      contrast: '#444',
    },
    text: {
      main: '#333',
      dark: '#000',
      light: '#666',
      contrast: '#fff',
    },
    success: {
      main: '#0bc163',
      dark: '#08914a',
      light: '#9ff9cb',
      contrast: '#fff',
    },
    warning: {
      main: '#f2a90d',
      dark: '#da990b',
      light: '#f7cc6e',
      contrast: '#ffffff',
    },
    danger: {
      main: '#f74848',
      dark: '#d30909',
      light: '#fcacac',
      contrast: '#ffffff',
    },
    info: {
      main: '#139ded',
      dark: '#0b5e8e',
      light: '#a0d8f8',
      contrast: '#ffffff',
    },
  },

  sizings: {
    xxs: '4px',
    xs: '8px',
    sm: '16px',
    md: '32px',
    lg: '64px',
    xl: '128px',
    xxl: '256px',
    huge: '512px',
  },

  spacings: {
    none: '0',
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '64px',
    huge: '80px',
  },

  fontSizes: {
    default: '14px',
    xxs: '8px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    huge: '32px',
  },

  borderRadius: {
    none: '0',
    default: '8px',
    xxs: '1px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '24px',
    huge: '32px',
  },

  borderWidth: {
    none: '0',
    xxs: '0.25px',
    xs: '0.5px',
    sm: '1px',
    md: '2px',
    lg: '4px',
    xl: '8px',
    xxl: '12px',
    huge: '24px',
  },

  typographies: {
    paragraph: {
      'font-size': '14px',
      'font-weight': 'normal',
    },
    h1: {
      'margin-bottom': '16px',
      'text-align': 'center',
      'font-size': '32px',
      'font-weight': 'bold',
    },
    h2: {
      'font-size': '24px',
      'font-weight': 'bold',
    },
    h3: {
      'font-size': '20px',
      'font-weight': 'bold',
    },
    h4: {
      'font-size': '16px',
      'font-weight': 'normal',
    },
    h5: {
      'font-size': '12px',
      'font-weight': 'normal',
    },
    h6: {
      'font-size': '8px',
      'font-weight': 'normal',
    },
  },
};

export { defaultTheme };

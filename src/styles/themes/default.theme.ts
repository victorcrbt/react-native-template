import { DefaultTheme } from 'styled-components/native';

const defaultTheme: DefaultTheme = {
  colors: {
    primary: {
      default: {
        main: '#6169FA',
        contrast: '#FFFFFF',
      },
      light: {
        main: '#ADB1FB',
        contrast: '#FFFFFF',
      },
      dark: {
        main: '#30337A',
        contrast: '#FFFFFF',
      },
    },
    secondary: {
      default: {
        main: '#FA7D7A',
        contrast: '#FFFFFF',
      },
      light: {
        main: '#FBC7C6',
        contrast: '#444444',
      },
      dark: {
        main: '#C76361',
        contrast: '#FFFFFF',
      },
    },
    tertiary: {
      default: {
        main: '#55FA8A',
        contrast: '#444444',
      },
      light: {
        main: '#A0FBBD',
        contrast: '#111111',
      },
      dark: {
        main: '#44C76D',
        contrast: '#FFFFFF',
      },
    },

    background: {
      default: {
        main: '#F0F0FF',
        contrast: '#444444',
      },
      light: {
        main: '#FFFFFF',
        contrast: '#444444',
      },
      dark: {
        main: '#000033',
        contrast: '#FFFFFF',
      },
    },
    text: {
      default: {
        main: '#444444',
        contrast: '#FFFFFF',
      },
      light: {
        main: '#999999',
        contrast: '#FFFFFF',
      },
      dark: {
        main: '#111111',
        contrast: '#FFFFFF',
      },
    },

    success: {
      default: {
        main: '#1BD14F',
        contrast: '#FFFFFF',
      },
      light: {
        main: '#82FFA6',
        contrast: '#444444',
      },
      dark: {
        main: '#0B521F',
        contrast: '#FFFFFF',
      },
    },
    danger: {
      default: {
        main: '#FF6354',
        contrast: '#FFFFFF',
      },
      light: {
        main: '#FFAFA3',
        contrast: '#444444',
      },
      dark: {
        main: '#80312A',
        contrast: '#FFFFFF',
      },
    },
    warning: {
      default: {
        main: '#F0933C',
        contrast: '#FFFFFF',
      },
      light: {
        main: '#EDCBAD',
        contrast: '#444444',
      },
      dark: {
        main: '#BD742F',
        contrast: '#FFFFFF  ',
      },
    },
    info: {
      default: {
        main: '#4E7ACC',
        contrast: '#FFFFFF',
      },
      light: {
        main: '#93B7FF',
        contrast: '#FFFFFF',
      },
      dark: {
        main: '#1346A6',
        contrast: '#FFFFFF',
      },
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

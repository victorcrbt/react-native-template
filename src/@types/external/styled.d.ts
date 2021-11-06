import 'styled-components';

declare module 'styled-components' {
  type ColorVariations = {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  };

  type FontWeights =
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 'normal';

  type TypographyProperties = {
    'margin-bottom'?: string;
    'text-align'?: 'left' | 'center' | 'right';
    'font-size': string;
    'font-weight': FontWeights;
  };

  type Colors = {
    primary: ColorVariations;
    secondary: ColorVariations;
    tertiary: ColorVariations;

    background: ColorVariations;
    text: ColorVariations;

    success: ColorVariations;
    warning: ColorVariations;
    danger: ColorVariations;
    info: ColorVariations;
  };

  type Spacings = {
    none: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    huge: string;
  };

  type Sizings = {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    huge: string;
  };

  type FontSizes = {
    default: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    huge: string;
  };

  type BorderRadius = {
    none: string;
    default: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    huge: string;
  };

  type BorderWidth = {
    none: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    huge: string;
  };

  type Typographies = {
    paragraph: TypographyProperties;
    h1: TypographyProperties;
    h2: TypographyProperties;
    h3: TypographyProperties;
    h4: TypographyProperties;
    h5: TypographyProperties;
    h6: TypographyProperties;
  };

  export interface DefaultTheme {
    colors: Colors;
    spacings: Spacings;
    sizings: Sizings;
    fontSizes: FontSizes;
    borderRadius: BorderRadius;
    borderWidth: BorderWidth;
    typographies: Typographies;
  }
}

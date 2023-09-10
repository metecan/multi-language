import 'styled-components';

export type ColorType = {
  BACKGROUND: string;
  PRIMARY: string;
  TEXT: string;
  BLACK: string;
  WHITE: string;
  BORDER: string;
  CARDS: {
    GRAY: string;
    ORANGE: string;
    GREEN: string;
    PURPLE: string;
  };
};

export type FontWeightType = {
  light: number;
  regular: number;
  medium: number;
  semibold: number;
};

export type FontFamilyType = {
  default: string;
};

interface ThemeType extends DefaultTheme {
  colors: ColorType;
  fontWeights: FontWeightType;
  fontFamilies: FontFamilyType;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

import { ColorType, FontFamilyType, FontWeightType } from '../../typings/styled';

export const AppColors: ColorType = {
  BACKGROUND: '#F4F4F5',
  PRIMARY: '#2563EB',
  TEXT: '#18181B',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  BORDER: '#d4d4d8',
  CARDS: {
    GRAY: '#A1A1AA',
    ORANGE: '#F59E0B',
    GREEN: '#10B981',
    PURPLE: '#AA0BF5',
  },
};

export const fontWeights: FontWeightType = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
};

export const fontFamilies: FontFamilyType = {
  default: "'Inter', Helvetica, Arial, sans-serif",
};

export const AppTheme = {
  colors: AppColors,
  fontWeights,
  fontFamilies,
};

import { DefaultTheme } from '@react-navigation/native';

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    black: 'black',
    danger: 'red',
    gray: '#888888',
    darkGray: '#343440',
    lightGray: '#dddddd',
    primary: '#832DD8',
    secondary: '#D146B3',
    white: '#ffffff',
  },
  typography: {
    sizes: {
      small: 12,
      medium: 14,
      large: 18,
      smalltitle: 24,
      title: 30,
    },
  },
};

export default MainTheme;

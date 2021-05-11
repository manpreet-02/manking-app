import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#322b7c',
      accent: '#ff7171',
    },
  };

  export default theme;
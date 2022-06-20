import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  colors: {
    brand: {
      50: '#e7f7ff',
      100: '#b6e3ff',
      200: '#80ccff',
      300: '#54aeff',
      400: '#218bff',
      500: '#0969da',
      600: '#0550ae',
      700: '#033d8b',
      800: '#0a3069',
      900: '#002155',
    },
  },
});

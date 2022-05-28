import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  colors: {
    brand: {
      50: '#1EA7FD',
      100: '#1EA7FD',
      200: '#1EA7FD',
      300: '#1EA7FD',
      400: '#1EA7FD',
      500: '#1EA7FD',
    },
  },
  // shadows: {
  //   outline: '0 0 0 3px rgba(30, 167, 253, 0.6)',
  // },
  // components: {
  //   Checkbox: {
  //     baseStyle: {
  //       control: {
  //         border: '1px solid',
  //         borderColor: 'brand.300',
  //       },
  //     },
  //   },
  //   Input: {
  //     baseStyle: {
  //       field: {
  //         _focus: {
  //           borderColor: 'brand.500',
  //         },
  //       },
  //     },
  //   },
  //   Button: {
  //     variants: {
  //       submit: {
  //         color: 'white',
  //         bg: 'brand.500',
  //         _hover: {
  //           bg: 'brand.500',
  //         },
  //         _active: {
  //           bg: 'brand.500',
  //         },
  //       },
  //       pin: {
  //         color: 'gray.200',
  //         bg: 'transparent',
  //         _hover: {
  //           color: 'brand.300',
  //           bg: 'transparent',
  //         },
  //         _active: {
  //           color: 'brand.300',
  //           bg: 'transparent',
  //         },
  //       },
  //       unpin: {
  //         color: 'brand.300',
  //         bg: 'transparent',
  //         _hover: {
  //           color: 'brand.300',
  //           bg: 'transparent',
  //         },
  //         _active: {
  //           color: 'brand.300',
  //           bg: 'transparent',
  //         },
  //       },
  //     },
  //   },
  // },
});

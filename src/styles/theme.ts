import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: Record<string, unknown>) => ({
    html: {
      scrollBehavior: 'smooth',
    },
    'html, body': {
      height: '100%',
      width: '100%',
    },
    body: {
      margin: 0,
      padding: 0,
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: 'black',
      lineHeight: 'base',
      ' > :last-child': {
        overflow: 'hidden',
        marginBottom: '-1px',
      },
    },
    '#__next': {
      height: '100%',
    },
    '*::placeholder': {
      color: mode('gray.600', 'whiteAlpha.400')(props),
      fontSize: '14px',
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    '#nprogress .bar': {
      bg: 'white',
      height: '1.5px',
    },
  }),
};

const fonts = {
  heading: `Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  body: `Mulish, "Helvetica Neue", Helvetica, Arial, sans-serif`,
};

export const theme = extendTheme({
  fonts,
  styles,
  components: {
    Textarea: {
      baseStyle: {},
      variants: {
        defaultVariant: {
          fontSize: 'sm',
          border: '1px solid',
          borderColor: 'gray.200',
          bg: 'gray.50',
          _hover: {
            border: '1px solid',
            borderColor: 'gray.300',
          },
          _focus: {
            border: '1px solid',
            borderColor: 'gray.300',
          },
        },
      },
      defaultProps: {
        variant: 'defaultVariant',
      },
    },
    Input: {
      baseStyle: {},
      variants: {
        defaultVariant: {
          field: {
            fontSize: 'sm',
            border: '1px solid',
            borderColor: 'gray.200',
            bg: 'gray.50',
            _hover: {
              border: '1px solid',
              borderColor: 'gray.300',
            },
            _focus: {
              border: '1px solid',
              borderColor: 'gray.300',
            },
          },
        },
      },
      defaultProps: {
        variant: 'defaultVariant',
      },
    },
  },
});

export default theme;

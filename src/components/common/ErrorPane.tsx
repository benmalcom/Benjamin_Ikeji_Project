import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

type ErrorPaneType = AlertProps & {
  error: string;
  cta?: React.ReactNode;
};

export const ErrorPane: React.FC<ErrorPaneType> = ({
  error,
  cta,
  ...props
}) => (
  <Alert
    as={Flex}
    flexDirection={{ base: 'column', md: 'row' }}
    status="error"
    colorScheme="orange"
    h="fit-content"
    {...props}
  >
    <AlertIcon />
    <AlertTitle>An error occurred!</AlertTitle>
    <AlertDescription>{error}</AlertDescription>
    {!!cta && cta}
  </Alert>
);
ErrorPane.displayName = 'ErrorPane';
export default ErrorPane;

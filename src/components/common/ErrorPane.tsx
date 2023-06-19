import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
  Flex,
  FlexProps,
} from '@chakra-ui/react';
import React from 'react';

type ErrorPaneProps = AlertProps &
  FlexProps & {
    error: string;
    cta?: React.ReactNode;
  };

export const ErrorPane: React.FC<ErrorPaneProps> = ({
  error,
  cta,
  ...props
}) => (
  <Alert
    as={Flex}
    status="error"
    h="fit-content"
    w="100%"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    <Flex>
      <AlertIcon mr={2} />
      <AlertTitle>Error</AlertTitle>
    </Flex>
    <AlertDescription>{error}</AlertDescription>
    {!!cta && cta}
  </Alert>
);
ErrorPane.displayName = 'ErrorPane';
export default ErrorPane;

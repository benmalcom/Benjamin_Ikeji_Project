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
  heading?: string;
  message: string;
};

export const InfoPane: React.FC<ErrorPaneType> = ({
  message,
  heading,
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
    {heading && <AlertTitle>{heading}</AlertTitle>}
    <AlertDescription>{message}</AlertDescription>
  </Alert>
);
InfoPane.displayName = 'InfoPane';
export default InfoPane;

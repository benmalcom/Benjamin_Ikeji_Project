import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

type ErrorPaneProps = AlertProps & {
  heading?: string;
  message: string;
};

export const InfoPane: React.FC<ErrorPaneProps> = ({
  message,
  heading,
  ...props
}) => (
  <Alert
    as={Flex}
    flexDirection={{ base: 'column', md: 'row' }}
    status="warning"
    h="fit-content"
    {...props}
  >
    <AlertIcon mr={2} />
    {heading && <AlertTitle>{heading}</AlertTitle>}
    <AlertDescription>{message}</AlertDescription>
  </Alert>
);
InfoPane.displayName = 'InfoPane';
export default InfoPane;

import { Box, Text, Heading, Icon } from '@chakra-ui/react';
import React from 'react';

import { FallbackProps } from 'react-error-boundary';
import { AiOutlineWarning } from 'react-icons/ai';
const sliceErrorStack = (stackTrace = '', numLines = 10) => {
  const lines = stackTrace.split('\n');
  return lines.slice(0, numLines).join('\n');
};
const AppErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Icon as={AiOutlineWarning} boxSize={'50px'} color={'orange.300'} />
      <Heading as="h4" size="md" mt={6} mb={2}>
        An Error Occurred
      </Heading>
      <Text color="gray.500">
        The application detected an error, and it's been reported to the
        application development team. Please reload page.
      </Text>

      <Heading as="h4" size="md" mt={6} mb={2}>
        Error.details
      </Heading>
      <pre>{sliceErrorStack(error.stack)}</pre>
    </Box>
  );
};

export default AppErrorFallback;

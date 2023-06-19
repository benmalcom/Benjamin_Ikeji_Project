import { Box, BoxProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export const LoadMoreIndicator = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => (
    <Box h="20px" border="2px solid transparent" {...props} ref={ref}>
      {children}
    </Box>
  )
);
LoadMoreIndicator.displayName = 'LoadMoreIndicator';
export default LoadMoreIndicator;

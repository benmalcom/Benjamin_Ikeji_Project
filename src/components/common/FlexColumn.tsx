import { Flex, FlexProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export const FlexColumn = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }, ref) => (
    <Flex {...props} direction="column" ref={ref}>
      {children}
    </Flex>
  )
);
FlexColumn.displayName = 'FlexColumn';
export default FlexColumn;

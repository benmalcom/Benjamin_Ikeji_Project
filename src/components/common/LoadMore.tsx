import { Button, Flex, FlexProps } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

type LoadMoreType = FlexProps & {
  onClick(): void;
  text?: string;
};

export const LoadMore = forwardRef<HTMLDivElement, LoadMoreType>(
  ({ onClick, text, ...props }, ref) => (
    <Flex {...props} align="center" justify="center" w="full" my={5} ref={ref}>
      <Button colorScheme="gray" variant="link" onClick={onClick}>
        {text ?? 'Load more'}
      </Button>{' '}
    </Flex>
  )
);
LoadMore.displayName = 'LoadMore';
export default LoadMore;

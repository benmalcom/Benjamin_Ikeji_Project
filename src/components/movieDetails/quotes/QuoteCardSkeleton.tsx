import { Flex, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { FlexColumn } from 'components/common';

type QuoteCardSkeletonType = {
  count: number;
};
const QuoteCardSkeleton: React.FC<QuoteCardSkeletonType> = ({ count }) => (
  <>
    {Array.from(Array(count).keys()).map(item => (
      <FlexColumn
        key={item}
        shadow="md"
        h="fit-content"
        pos="relative"
        bg="gray.800"
        p={{ base: 3, md: 4 }}
        borderLeft="1px solid"
        borderLeftColor="orange.400"
        mb="16px"
      >
        <FlexColumn w="full" maxH="fit-content" gap={3}>
          <Skeleton h="15px" w="full" />
          <Flex w="full" justify="end">
            <Skeleton h="10px" w="20%" />
          </Flex>
        </FlexColumn>
      </FlexColumn>
    ))}
  </>
);

export default QuoteCardSkeleton;

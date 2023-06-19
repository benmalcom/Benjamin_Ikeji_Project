import { Flex, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';
import { FlexColumn, MotionFlex } from 'components/common';

type MovieCardSkeletonType = {
  count: number;
};
const MovieCardSkeleton: React.FC<MovieCardSkeletonType> = ({ count }) => (
  <>
    {Array.from(Array(count).keys()).map(item => (
      <MotionFlex
        key={item}
        shadow="md"
        h={{ base: 'fit-content', lg: '320px' }}
        pos="relative"
        flexDir={{ base: 'column', lg: 'row' }}
        align={{ base: 'center', md: 'unset' }}
        gap={{ base: 8, md: 6, lg: 'unset' }}
        bg="gray.800"
        p={{ base: 5, md: 6 }}
      >
        <Skeleton
          h={{ base: '320px', lg: 'full' }}
          w={{ base: '90%', md: 'full', lg: '43%' }}
        />
        <FlexColumn
          flex={1}
          pl={{ base: 0, md: 0, lg: 5 }}
          gap={3}
          w={{ base: '90%', md: 'unset' }}
        >
          <Skeleton height="20px" />
          <Skeleton height="20px" w="80%" />
          <SkeletonText mt="4" noOfLines={5} spacing="2" skeletonHeight="2" />
          <Flex gap={3} mt={2}>
            <Skeleton height="20px" w="50px" borderRadius={8} />
            <Skeleton height="20px" w="40px" borderRadius={8} />
          </Flex>
          <Flex
            gap={3}
            mt={3}
            flex={1}
            align="flex-end"
            justify="space-between"
          >
            <Skeleton height="35px" w="47%" />
            <Skeleton height="35px" w="47%" />
          </Flex>
        </FlexColumn>
      </MotionFlex>
    ))}
  </>
);

export default MovieCardSkeleton;

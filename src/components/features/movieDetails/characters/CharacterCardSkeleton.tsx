import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import React from 'react';
import { FlexColumn } from 'components/common';

type CharacterCardSkeletonType = {
  count: number;
};
const CharacterCardSkeleton: React.FC<CharacterCardSkeletonType> = ({
  count,
}) => (
  <>
    {Array.from(Array(count).keys()).map(item => (
      <Flex
        key={item}
        shadow="md"
        pos="relative"
        bg="gray.800"
        py={{ base: 3, md: 3 }}
        px={{ base: 3, md: 4 }}
        h="90px"
        align="center"
      >
        <SkeletonCircle size="12" />
        <FlexColumn
          h="full"
          flex={1}
          pl={{ base: 5, md: 0, lg: 5 }}
          gap={3}
          justify="space-between"
        >
          <Skeleton h="15px" w="35%" />
          <Skeleton h="10px" w="30%" />
          <Skeleton h="10px" w="40%" />
        </FlexColumn>
      </Flex>
    ))}
  </>
);

export default CharacterCardSkeleton;

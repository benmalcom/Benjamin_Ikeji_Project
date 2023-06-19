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
      <FlexColumn
        key={item}
        shadow="md"
        maxH="fit-content"
        pos="relative"
        bg="gray.800"
        p={{ base: 3, md: 4 }}
        h="90px"
      >
        <Flex w="full" maxH="fit-content" justify="space-between">
          <SkeletonCircle size="12" />
          <FlexColumn flex={1} pl={{ base: 5, md: 0, lg: 5 }} gap={3}>
            <Skeleton h="15px" w="35%" />
            <Skeleton h="10px" w="30%" />
            <Skeleton h="10px" w="30%" />
          </FlexColumn>
        </Flex>
      </FlexColumn>
    ))}
  </>
);

export default CharacterCardSkeleton;

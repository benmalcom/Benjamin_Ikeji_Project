import {
  Flex,
  UnorderedList,
  ListItem,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import React from 'react';
import { FlexColumn } from 'components/common';

const MovieDetailsSkeleton = () => {
  return (
    <FlexColumn gap={10} mt={10} w="full" px={{ base: 3, lg: 'unset' }}>
      <FlexColumn gap={3}>
        <Skeleton h="35px" w={{ base: 'full', lg: '80%' }} />
      </FlexColumn>
      <Flex
        shadow="md"
        h={{ base: 'fit-content', lg: '350px' }}
        pos="relative"
        flexDir={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'unset' }}
        gap={{ base: 8, md: 6, lg: 'unset' }}
        bg="gray.800"
        px={{ base: 2, md: 6 }}
        py={{ base: 5, md: 5 }}
      >
        <Skeleton
          h={{ base: '320px', lg: 'full' }}
          w={{ base: '80%', md: '30%', lg: '20%' }}
          mx={{ base: 'auto', md: 'unset' }}
          _hover={{ opacity: 0.9 }}
        />
        <FlexColumn flex={1} pl={{ md: 0, lg: 5 }} gap={3}>
          <Flex gap={5} align="center" mb={2}>
            <UnorderedList display="flex" ml={0} alignItems="center">
              {Array.from(Array(2).keys()).map(index => (
                <ListItem
                  key={index}
                  color="white"
                  fontWeight={700}
                  float="left"
                  ml={5}
                  display="flex"
                  alignItems="center"
                  listStyleType="disc"
                  _first={{ listStyleType: 'none', ml: 0 }}
                  w="40px"
                  _last={{ width: '45px' }}
                >
                  <Skeleton h="15px" w="full" />
                </ListItem>
              ))}
            </UnorderedList>
            <Flex gap={2}>
              {Array.from(Array(2).keys()).map(index => (
                <Skeleton
                  key={index}
                  size="md"
                  borderRadius="full"
                  variant="outline"
                  px={9}
                  py={4}
                  gap={1}
                />
              ))}
            </Flex>
          </Flex>

          <SkeletonText noOfLines={2} skeletonHeight="3" />
          <Flex gap={3} my={4}>
            <Skeleton height="20px" w="50px" borderRadius={8} />
            <Skeleton height="20px" w="40px" borderRadius={8} />
          </Flex>
          <FlexColumn gap={5}>
            {Array.from(Array(3).keys()).map(index => (
              <SkeletonText
                key={index}
                noOfLines={1}
                skeletonHeight="3"
                w="140px"
              />
            ))}
          </FlexColumn>
          <Flex gap={3} mt={3} flex={1} align="flex-end">
            <Skeleton height="35px" w="120px" />
          </Flex>
        </FlexColumn>
      </Flex>
    </FlexColumn>
  );
};

export default MovieDetailsSkeleton;

import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Tag,
  TagLabel,
  Icon,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { GiTrophyCup, GiTomato } from 'react-icons/gi';
import { FlexColumn } from 'components/common';
import AppErrorFallBack from 'components/common/AppErrorFallBack';
import { MovieMetaInformationType, MovieType } from 'types/movie';
import {
  formatNumberWithCurrency,
  formatViewingTime,
  getMovieMetaInformation,
  getTrailerLink,
} from 'utils/movieUtils';

const POSTER_IMAGE_PATH = '/images/lotr/';

type MovieCardProps = {
  movie: MovieType;
};
const MovieDetailsCard: React.FC<MovieCardProps> = ({ movie }) => {
  const metaInformation: MovieMetaInformationType = getMovieMetaInformation(
    movie.name
  );
  const itemsForDisplay = getKeyValuesForDisplay(movie);
  return (
    <FlexColumn gap={10} mt={10} w="full">
      <FlexColumn gap={3}>
        <Heading fontSize={{ base: '3xl', lg: '4xl', xl: '5xl' }} color="white">
          {movie.name}
        </Heading>
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
        <Image
          h={{ base: '320px', lg: 'full' }}
          w={{ base: '80%', md: '30%', lg: '20%' }}
          src={`${POSTER_IMAGE_PATH}/${metaInformation.poster}`}
          alt="Movie poster image"
          borderRadius={5}
          loading="lazy"
          _hover={{ opacity: 0.9 }}
        />
        <FlexColumn flex={1} px={{ base: 6, md: 0, lg: 5 }} gap={3}>
          <Flex gap={5} align="center">
            <UnorderedList display="flex" ml={0}>
              {[
                metaInformation.year,
                formatViewingTime(movie.runtimeInMinutes),
              ].map((item, index) => (
                <ListItem
                  key={index}
                  color="white"
                  fontWeight={700}
                  float="left"
                  ml={5}
                  listStyleType="disc"
                  _first={{ listStyleType: 'none', ml: 0 }}
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
            <Flex gap={2}>
              {metaInformation.categories.map((item, index) => (
                <Tag
                  key={index}
                  size="sm"
                  borderRadius="full"
                  variant="outline"
                  px={4}
                  py={2}
                  as={Flex}
                  alignItems="center"
                  gap={1}
                >
                  <TagLabel color="white">{item}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Flex>
          <Flex w="full">
            <Text fontSize="sm" color="white" noOfLines={5}>
              {metaInformation.caption}
            </Text>
          </Flex>
          <Flex gap={3} my={2}>
            <Tag
              size="md"
              borderRadius="full"
              variant="outline"
              colorScheme="yellow"
              px={3}
              as={Flex}
              alignItems="center"
              gap={1}
            >
              <Icon as={GiTomato} color="red" />
              <TagLabel color="white">
                {Math.round(movie.rottenTomatoesScore)}%
              </TagLabel>
            </Tag>
            <Tag
              size="md"
              borderRadius="full"
              variant="outline"
              colorScheme="yellow"
              px={3}
              as={Flex}
              alignItems="center"
              gap={1}
            >
              <Icon as={GiTrophyCup} color="white" />
              <TagLabel>{movie.academyAwardWins}</TagLabel>
            </Tag>
          </Flex>
          {itemsForDisplay.map((item, index) => (
            <Flex align="center" gap={1} key={index}>
              <Text color="white" fontSize="sm">
                {item.label}:
              </Text>
              <Text color="orange" fontSize="sm">
                {item.value}
              </Text>
            </Flex>
          ))}
          <Flex gap={3} mt={3} flex={1} align="flex-end">
            <Button
              as="a"
              colorScheme="yellow"
              variant="outline"
              size="sm"
              borderRadius={0}
              target="_blank"
              href={getTrailerLink(movie.name)}
            >
              Watch Trailer
            </Button>
          </Flex>
        </FlexColumn>
      </Flex>
    </FlexColumn>
  );
};

export default withErrorBoundary(MovieDetailsCard, {
  fallbackRender: AppErrorFallBack,
});

const getKeyValuesForDisplay = (movie: MovieType) => [
  {
    label: 'Budget',
    value: formatNumberWithCurrency(movie.budgetInMillions * 1000000),
  },
  {
    label: 'Revenue',
    value: formatNumberWithCurrency(movie.boxOfficeRevenueInMillions * 1000000),
  },
  {
    label: 'Award Nominations',
    value: movie.academyAwardNominations,
  },
];

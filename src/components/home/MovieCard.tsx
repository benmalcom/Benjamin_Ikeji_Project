import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Tag,
  TagLabel,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { GiTrophyCup, GiTomato } from 'react-icons/gi';
import { FlexColumn, MotionFlex } from 'components/common';
import AppErrorFallBack from 'components/common/AppErrorFallBack';
import { MovieMetaInformationType, MovieType } from 'types/movie';
import { getMovieMetaInformation } from 'utils/movieUtils';

const POSTER_IMAGE_PATH = '/images/lotr/';

type MovieCardProps = {
  movie: MovieType;
};
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const metaInformation: MovieMetaInformationType = getMovieMetaInformation(
    movie.name
  );
  return (
    <MotionFlex
      whileHover={{
        y: -1,
        scale: 1.01,
      }}
      shadow="md"
      h={{ base: 'full', lg: '320px' }}
      pos="relative"
      flexDir={{ base: 'column', lg: 'row' }}
      align={{ base: 'center', md: 'unset' }}
      gap={{ base: 8, md: 6, lg: 'unset' }}
      bg="gray.800"
      p={{ base: 3, md: 6 }}
    >
      <Image
        h={{ base: '320px', lg: 'full' }}
        w={{ base: '90%', md: '75%' }}
        src={`${POSTER_IMAGE_PATH}/${metaInformation.poster}`}
        alt="Movie poster image"
        borderRadius={5}
        loading="lazy"
        _hover={{ opacity: 0.9 }}
      />
      <FlexColumn flex={1} pl={{ base: 5, md: 0, lg: 5 }} gap={3}>
        <Heading color="white" as="h4" size="md">
          {movie.name}
        </Heading>
        <Heading color="orange" as="h6" size="xs" textTransform="uppercase">
          {metaInformation.categories.join(', ')}
        </Heading>
        <Text fontSize="sm" color="white" noOfLines={5}>
          {metaInformation.caption}
        </Text>
        <Flex gap={3} mt={2}>
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
        <Flex gap={3} mt={3} flex={1} align="flex-end" pb={1}>
          <Link href={`/movies/${movie._id}`} passHref>
            <Button as="a" colorScheme="orange" size="sm" borderRadius={0}>
              Movie Details
            </Button>
          </Link>
          <Button
            as="a"
            colorScheme="yellow"
            variant="outline"
            size="sm"
            borderRadius={0}
            target="_blank"
            href={`https://youtube.com/results?search_query=${movie.name} trailer`}
          >
            Watch Trailer
          </Button>
        </Flex>
      </FlexColumn>
    </MotionFlex>
  );
};

export default withErrorBoundary(MovieCard, {
  fallbackRender: AppErrorFallBack,
});

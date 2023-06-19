import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { FlexColumn } from 'components/common';
import ErrorPane from 'components/common/ErrorPane';
import {
  MovieDetailsCard,
  MovieDetailsCardSkeleton,
  CharactersGridLayout,
} from 'components/features/movieDetails';
import QuotesDrawer from 'components/features/movieDetails/quotes/QuotesDrawer';
import useFetchCharacters from 'hooks/useCharacters';
import { useFetchMovieById } from 'hooks/useMovies';
import { CharacterType } from 'types/character';

const FETCH_LIMIT = 9;

const Details = () => {
  const router = useRouter();
  const isRouterReady = router.isReady;
  const { movieId } = router.query;
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [page, setPage] = useState(1);

  const {
    data: movieData,
    loading: isLoadingMovie,
    error: movieError,
    fetchMovieById,
  } = useFetchMovieById(movieId! as string);

  const {
    data: charactersData,
    loading: isLoadingCharacters,
    error: charactersError,
  } = useFetchCharacters({
    page,
    limit: FETCH_LIMIT,
  });

  useEffect(() => {
    if (!isRouterReady) return;
  }, [isRouterReady]);

  const hasMoreCharacters = useMemo(
    () =>
      characters.length > 0 &&
      page * FETCH_LIMIT === characters.length &&
      characters.length < charactersData.total,
    [charactersData.total, characters.length, page]
  );

  useEffect(() => {
    if (charactersData.docs) {
      setCharacters(prevChars => [...prevChars, ...charactersData.docs]);
    }
  }, [charactersData]);

  const handleLoadMore = () => {
    if (!isLoadingCharacters && hasMoreCharacters) {
      setPage(page => page + 1);
    }
    return;
  };

  const handleFetchMovie = () => fetchMovieById();

  return (
    <Container maxW="7xl" h="full" alignItems="center" mt="50px">
      <Box mb={3}>
        <Link href="/" passHref>
          <Button
            leftIcon={<MdOutlineKeyboardBackspace />}
            as="a"
            textDecoration="none"
            cursor="pointer"
            w="fit-content"
            color="white"
            variant="link"
            _focus={{
              outline: 'none',
            }}
          >
            Back to Movies
          </Button>
        </Link>
      </Box>
      <VStack w="full" spacing={16} h="full" bg="blackAlpha.900">
        <>
          {(isLoadingMovie || !isRouterReady) && <MovieDetailsCardSkeleton />}
          {!isLoadingMovie && !movieError && movieData?.docs.length > 0 && (
            <MovieDetailsCard movie={movieData.docs[0]} />
          )}
          {movieError && (
            <ErrorPane
              mt={8}
              error="An error occurred while fetching this movie."
              cta={
                <Button
                  onClick={handleFetchMovie}
                  ml={5}
                  colorScheme="orange"
                  size="sm"
                >
                  Try again
                </Button>
              }
            />
          )}

          {!movieError && (
            <FlexColumn w="full">
              <Flex
                align="center"
                h="50px"
                borderLeft="2px solid"
                borderLeftColor="orange.500"
                w="full"
                mb={16}
                px={3}
                justify="space-between"
              >
                <Heading fontSize="2xl" textAlign="left" color="white">
                  Characters{' '}
                </Heading>
                {isRouterReady && (
                  <QuotesDrawer
                    triggerFunc={({ trigger }) => (
                      <Button
                        _focus={{
                          outline: 'none',
                        }}
                        colorScheme="orange"
                        variant="link"
                        onClick={() => trigger()}
                        fontSize={{ base: 'sm', md: 'md' }}
                      >
                        See movie quotes
                      </Button>
                    )}
                    movieId={movieId as string}
                  />
                )}
              </Flex>

              <CharactersGridLayout
                characters={characters}
                loading={isLoadingCharacters}
                onLoadMore={handleLoadMore}
                hasMore={hasMoreCharacters}
                error={charactersError?.message}
              />
            </FlexColumn>
          )}
        </>
      </VStack>
    </Container>
  );
};

export default Details;

import { Grid, Container, Flex, Button } from '@chakra-ui/react';
import React, { useRef } from 'react';
import ErrorPane from 'components/common/ErrorPane';
import useMovieListScroll from 'hooks/useMovieListScroll';
import { MovieType } from 'types/movie';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './MovieCardSkeleton';
import SideNav from './SideNav';

type MoviesGridLayoutProps = {
  movies: MovieType[];
  loading?: boolean;
  error?: string;
  fetchMovies(): void;
};
const MoviesGridLayout: React.FC<MoviesGridLayoutProps> = ({
  movies,
  loading,
  error,
  fetchMovies,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { isTopVisible, isBottomVisible, triggerScrollDown, triggerScrollUp } =
    useMovieListScroll(gridRef.current!);
  const handleFetchMovies = () => fetchMovies();

  const hasMovies = movies.length > 0;

  return (
    <Flex w="full">
      <Container maxW="6xl" h="full" alignItems="center">
        <Flex h="full" gap={3} pos="relative" pb={4} px={1}>
          {hasMovies && (
            <SideNav
              onScrollDown={triggerScrollDown}
              onScrollUp={triggerScrollUp}
              isTopVisible={isTopVisible}
              isBottomVisible={isBottomVisible}
            />
          )}

          <Grid
            ref={gridRef}
            w="full"
            gridTemplateColumns={{
              base: '85%',
              md: 'repeat(2,minmax(0,1fr))',
            }}
            columnGap={8}
            rowGap={10}
            justifyContent="center"
            h="fit-content"
            ml={{ base: 0, md: '100px' }}
          >
            {hasMovies &&
              movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
            {loading && <MovieCardSkeleton count={hasMovies ? 2 : 6} />}
          </Grid>
        </Flex>
        {error && !loading && (
          <ErrorPane
            px={2}
            error="Problem fetching movies, please try again."
            ml={{ base: 0, md: '100px' }}
            w={{ base: 'full', md: 'calc(100% - 100px)' }}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            cta={
              <Button
                onClick={handleFetchMovies}
                ml={5}
                colorScheme="red"
                size="sm"
              >
                Try again
              </Button>
            }
          />
        )}
      </Container>
    </Flex>
  );
};
export default MoviesGridLayout;

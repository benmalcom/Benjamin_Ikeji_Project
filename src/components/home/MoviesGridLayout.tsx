import { Grid, Container, Flex } from '@chakra-ui/react';
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
};
const MoviesGridLayout: React.FC<MoviesGridLayoutProps> = ({
  movies,
  loading,
  error,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { isTopVisible, isBottomVisible, onScrollUp, onScrollDown } =
    useMovieListScroll(gridRef.current!);
  const hasMovies = movies.length > 0;

  return (
    <Flex w="full">
      <Container maxW="6xl" h="full" alignItems="center">
        <Flex h="full" gap={3} pos="relative" pb={4} px={2}>
          {hasMovies && (
            <SideNav
              onScrollDown={onScrollDown}
              onScrollUp={onScrollUp}
              isTopVisible={isTopVisible}
              isBottomVisible={isBottomVisible}
            />
          )}

          <Grid
            ref={gridRef}
            w="full"
            gridTemplateColumns={{
              base: '97%',
              md: 'repeat(2,minmax(0,1fr))',
            }}
            columnGap={8}
            rowGap={10}
            justifyContent="center"
            h="fit-content"
            ml={{ base: '50px', md: '100px' }}
          >
            {hasMovies &&
              movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
            {loading && <MovieCardSkeleton count={hasMovies ? 2 : 6} />}
          </Grid>
        </Flex>
        {error && !loading && (
          <ErrorPane
            error={error}
            ml={{ base: '50px', md: '100px' }}
            w={{ base: 'calc(100% - 50px)', md: 'calc(100% - 100px)' }}
          />
        )}
      </Container>
    </Flex>
  );
};
export default MoviesGridLayout;

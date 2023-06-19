import { VStack } from '@chakra-ui/react';
import { Hero, MoviesGridLayout } from 'components/features/movieList';
import { useFetchMovies } from 'hooks/useMovies';

const Home = () => {
  const { data, loading, error, fetchMovies } = useFetchMovies();
  return (
    <VStack w="full" spacing={0} h="full" bg="blackAlpha.900">
      <Hero />
      <MoviesGridLayout
        // Let the movieList with quotes come forward
        movies={data.docs.reverse()}
        loading={loading}
        error={error?.message}
        fetchMovies={fetchMovies}
      />
    </VStack>
  );
};

export default Home;

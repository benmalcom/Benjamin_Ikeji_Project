import { VStack } from '@chakra-ui/react';
import { Hero, MoviesGridLayout } from 'components/movies';
import { useFetchMovies } from 'hooks/useMovies';

const Home = () => {
  const { data, loading, error } = useFetchMovies();

  return (
    <VStack w="full" spacing={0} h="full" bg="blackAlpha.900">
      <Hero />
      <MoviesGridLayout
        // Let the movies with quotes come forward
        movies={data.docs.reverse()}
        loading={loading}
        error={error?.message}
      />
    </VStack>
  );
};

export default Home;

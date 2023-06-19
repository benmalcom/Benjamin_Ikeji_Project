import { VStack } from '@chakra-ui/react';
import { Hero, MoviesGridLayout } from 'components/home';
import { useFetchMovies } from 'hooks/useMovies';

const Home = () => {
  const { data, loading, error } = useFetchMovies();

  return (
    <VStack w="full" spacing={0} h="full" bg="blackAlpha.900">
      <Hero />
      <MoviesGridLayout
        movies={data.docs}
        loading={loading}
        error={error?.message}
      />
    </VStack>
  );
};

export default Home;

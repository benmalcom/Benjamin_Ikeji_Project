import { Grid, Container, Box } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { ErrorPane, FlexColumn } from 'components/common';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { CharacterType } from 'types/character';
import CharacterCard from './CharacterCard';
import CharacterCardSkeleton from './CharacterCardSkeleton';

type CharactersGirdLayoutProps = {
  characters: CharacterType[];
  onLoadMore(): void;
  loading?: boolean;
  hasMore?: boolean;
  error?: string;
};
const CharactersGirdLayout: React.FC<CharactersGirdLayoutProps> = ({
  characters,
  loading,
  hasMore,
  error,
  onLoadMore,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(bottomRef, onLoadMore, loading);

  return (
    <FlexColumn h="full" gap={6} pos="relative" w="full" align="center">
      <Container
        maxW="7xl"
        h="full"
        w="full"
        alignItems="center"
        px={0}
        as={FlexColumn}
      >
        <Grid
          w="full"
          gridTemplateColumns={{
            base: '100%',
            md: 'repeat(2,minmax(0,1fr))',
            lg: 'repeat(3,minmax(0,1fr))',
          }}
          columnGap={8}
          rowGap={5}
          justifyContent="center"
          h="fit-content"
        >
          {characters.length > 0 &&
            characters.map(character => (
              <CharacterCard key={character._id} character={character} />
            ))}
          {loading && <CharacterCardSkeleton count={6} />}
        </Grid>
      </Container>
      {!loading && !!error && (
        <ErrorPane
          error="An error occured while fetching characters, please refresh browser."
          w="fit-content"
        />
      )}
      {!loading && hasMore && !error && <Box ref={bottomRef} mb={6} h="10px" />}
    </FlexColumn>
  );
};
export default CharactersGirdLayout;

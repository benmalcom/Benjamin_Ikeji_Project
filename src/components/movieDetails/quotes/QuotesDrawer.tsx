import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import useFetchCharacters from 'hooks/useCharacters';
import useFetchMovieQuotes from 'hooks/useQuotes';
import { CharacterType } from 'types/character';
import { QuoteType } from 'types/quote';
import QuotesGridLayout from './QuotesGridLayout';
const FETCH_LIMIT = 15;

type CharactersGirdLayoutProps = {
  triggerFunc({ trigger }: { trigger(): void }): React.ReactNode;
  movieId: string;
};
const QuotesDrawer: React.FC<CharactersGirdLayoutProps> = ({
  triggerFunc,
  movieId,
}) => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  const {
    data: quotesData,
    loading: isLoadingQuotes,
    error: quotesError,
    fetchQuotes,
  } = useFetchMovieQuotes(movieId, {
    page,
    limit: FETCH_LIMIT,
  });

  // Fetch all chars for quotes
  const { data: charactersData } = useFetchCharacters();

  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const { isOpen, onClose, onToggle } = useDisclosure();

  const hasMoreQuotes = useMemo(
    () =>
      quotes.length > 0 &&
      page * FETCH_LIMIT === quotes.length &&
      quotes.length < quotesData.total,
    [quotesData.total, quotes.length, page]
  );

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  useEffect(() => {
    if (quotesData.docs)
      setQuotes(prevQuotes => prevQuotes.concat(quotesData.docs));
  }, [quotesData]);

  useEffect(() => {
    if (charactersData.docs)
      setCharacters(prevChars => [...prevChars, ...charactersData.docs]);
  }, [charactersData]);

  const handleLoadMore = () => {
    if (!isLoadingQuotes && hasMoreQuotes) {
      setPage(page => page + 1);
    }
    return;
  };

  const charactersById = characters.reduce((acc, character) => {
    acc[character._id] = character;
    return acc;
  }, {} as { [key: string]: CharacterType });

  return (
    <>
      {triggerFunc({
        trigger: onToggle,
      })}
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        size="sm"
        colorScheme="orange"
      >
        <DrawerOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <DrawerContent bg="gray.600" boxShadow="xl">
          <DrawerCloseButton color="white" _focus={{ outline: 'none' }} />
          <DrawerHeader color="white">Quotes from movie</DrawerHeader>
          <DrawerBody>
            <QuotesGridLayout
              charactersById={charactersById}
              quotes={quotes}
              loading={isLoadingQuotes}
              onLoadMore={handleLoadMore}
              hasMore={hasMoreQuotes}
              error={quotesError?.message}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default QuotesDrawer;

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import useFetchQuotes from 'hooks/useQuotes';
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
  const {
    data: quotesData,
    loading: isLoadingQuotes,
    error: quotesError,
    fetchQuotes,
  } = useFetchQuotes(movieId, {
    page,
    limit: FETCH_LIMIT,
  });

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

  const handleLoadMore = () => {
    if (!isLoadingQuotes && hasMoreQuotes) {
      setPage(page => page + 1);
    }
    return;
  };

  console.log('hasMoreQuotes ', hasMoreQuotes);
  console.log('page ', page);

  return (
    <>
      {triggerFunc({
        trigger: onToggle,
      })}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <DrawerContent bg="blackAlpha.800" boxShadow="xl">
          <DrawerHeader color="white">Quotes from movie</DrawerHeader>
          <DrawerBody>
            <QuotesGridLayout
              quotes={quotes}
              loading={isLoadingQuotes}
              onLoadMore={handleLoadMore}
              hasMore={hasMoreQuotes}
              error={quotesError as unknown as string}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default QuotesDrawer;

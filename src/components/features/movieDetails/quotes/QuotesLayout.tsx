import { Container, Grid } from '@chakra-ui/react';
import React, { useRef } from 'react';
import {
  ErrorPane,
  FlexColumn,
  InfoPane,
  LoadMoreIndicator,
} from 'components/common';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { CharacterType } from 'types/character';
import { QuoteType } from 'types/quote';
import QuoteCard from './QuoteCard';
import QuoteCardSkeleton from './QuoteCardSkeleton';

type QuotesLayoutProps = {
  quotes: QuoteType[];
  loading?: boolean;
  onLoadMore(): void;
  hasMore?: boolean;
  error?: string;
  charactersById: { [key: string]: CharacterType };
};
const QuotesLayout: React.FC<QuotesLayoutProps> = ({
  quotes,
  loading,
  error,
  onLoadMore,
  hasMore,
  charactersById,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(bottomRef, onLoadMore, loading);
  return (
    <FlexColumn h="full" gap={6} pos="relative" w="full">
      <Container maxW="7xl" alignItems="center" px={0} as={FlexColumn}>
        <Grid
          w="full"
          gridTemplateColumns={{
            base: '100%',
          }}
          justifyContent="center"
          h="fit-content"
        >
          {quotes.length > 0 &&
            quotes.map(quote => (
              <QuoteCard
                key={quote._id}
                quote={quote}
                charactersName={charactersById?.[quote.character]?.name}
              />
            ))}
          {loading && <QuoteCardSkeleton count={15} />}
        </Grid>
      </Container>
      {!loading && quotes.length === 0 && !error && (
        <InfoPane message="No quotes available for this selection." />
      )}
      {!loading && !!error && (
        <ErrorPane
          flexDirection="column"
          error="An error occured while fetching the quotes, please refresh browser and try again."
          w="fit-content"
          py={3}
        />
      )}
      {!loading && hasMore && <LoadMoreIndicator ref={bottomRef} mb={6} />}
    </FlexColumn>
  );
};
export default QuotesLayout;

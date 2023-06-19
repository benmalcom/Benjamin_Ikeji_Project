import { Container, Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { useRef } from 'react';
import { ErrorPane, FlexColumn, InfoPane } from 'components/common';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { QuoteType } from 'types/quote';
import QuoteCard from './QuoteCard';
import QuoteCardSkeleton from './QuoteCardSkeleton';

type CharactersGirdLayoutProps = {
  quotes: QuoteType[];
  loading?: boolean;
  onLoadMore(): void;
  hasMore?: boolean;
  error: string | null;
};
const CharactersGirdLayout: React.FC<CharactersGirdLayoutProps> = ({
  quotes,
  loading,
  error,
  onLoadMore,
  hasMore,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(bottomRef, onLoadMore, loading);
  return (
    <FlexColumn h="full" gap={6} pos="relative" w="full">
      <Container maxW="7xl" alignItems="center" px={0} as={FlexColumn}>
        <Box
          css={css`
            width: 100%;
            column-count: 2;
            column-width: 460px;
            gap: 24px;
            margin-top: 25px;
          `}
          w="full"
        >
          {!loading &&
            quotes.length > 0 &&
            quotes.map(quote => <QuoteCard key={quote._id} quote={quote} />)}
          {loading && <QuoteCardSkeleton count={quotes.length > 0 ? 10 : 4} />}
        </Box>
      </Container>
      {!loading && hasMore && (
        <Box ref={bottomRef} mb={6} h="10px" border="2px solid red" />
      )}
      {!loading && quotes.length === 0 && !error && (
        <InfoPane message="No quotes available for this movie" />
      )}
      {!loading && !!error && <ErrorPane error={error} />}
    </FlexColumn>
  );
};
export default CharactersGirdLayout;

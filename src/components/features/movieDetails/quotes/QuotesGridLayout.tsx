import { Container, Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { useRef } from 'react';
import { ErrorPane, FlexColumn, InfoPane } from 'components/common';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { CharacterType } from 'types/character';
import { QuoteType } from 'types/quote';
import QuoteCard from './QuoteCard';
import QuoteCardSkeleton from './QuoteCardSkeleton';

type CharactersGirdLayoutProps = {
  quotes: QuoteType[];
  loading?: boolean;
  onLoadMore(): void;
  hasMore?: boolean;
  error?: string;
  charactersById: { [key: string]: CharacterType };
};
const CharactersGirdLayout: React.FC<CharactersGirdLayoutProps> = ({
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
        <Box
          css={css`
            width: 100%;
            column-count: 2;
            column-width: 460px;
            gap: 24px;
            &:not(:first-child) {
              margin-top: 30px;
            }
          `}
          w="full"
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
        </Box>
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
      {!loading && hasMore && (
        <Box ref={bottomRef} mb={6} h="70px" border="2px solid black" />
      )}
    </FlexColumn>
  );
};
export default CharactersGirdLayout;

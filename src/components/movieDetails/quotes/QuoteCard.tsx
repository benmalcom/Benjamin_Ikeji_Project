import { Text } from '@chakra-ui/react';
import React from 'react';
import { FlexColumn, MotionFlexColumn } from 'components/common';
import { QuoteType } from 'types/quote';

type MovieQuoteProps = {
  quote: QuoteType;
  charactersName?: string;
};
const MovieQuote: React.FC<MovieQuoteProps> = ({ quote, charactersName }) => {
  return (
    <MotionFlexColumn
      whileHover={{
        y: -1,
        scale: 1.01,
      }}
      shadow="md"
      h="fit-content"
      pos="relative"
      bg="gray.800"
      p={{ base: 3, md: 4 }}
      borderLeft="1px solid"
      borderLeftColor="orange.400"
      mb="16px"
    >
      <FlexColumn w="full" maxH="fit-content" gap={3}>
        <Text color="white">{quote.dialog}</Text>
        <Text color="gray.400" textAlign="right" fontSize="sm">
          - {charactersName ?? 'Unknown'}
        </Text>
      </FlexColumn>
    </MotionFlexColumn>
  );
};

export default MovieQuote;

import {
  Flex,
  Text,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Tag,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { GoQuote } from 'react-icons/go';
import { FlexColumn } from 'components/common';
import { QuotesLayout } from 'components/features/movieDetails/quotes';
import { useFetchCharacterQuotes } from 'hooks/useQuotes';
import { CharacterType } from 'types/character';
import { QuoteType } from 'types/quote';
import { getCharacterAttributes } from 'utils/movieUtils';
const FETCH_LIMIT = 15;

type CharacterInfoProps = {
  character: CharacterType;
  triggerFunc({ trigger }: { trigger(): void }): React.ReactNode;
};
const CharacterInfo: React.FC<CharacterInfoProps> = ({
  character,
  triggerFunc,
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [page, setPage] = useState(1);
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [showQuotes, setShowQuotes] = useState(false);

  const {
    data: quotesData,
    loading: isLoadingQuotes,
    error: quotesError,
    fetchQuotes,
  } = useFetchCharacterQuotes(character._id, showQuotes, {
    page,
    limit: FETCH_LIMIT,
  });

  // Fetch all quotes for character

  const hasMoreQuotes = useMemo(
    () =>
      quotes.length > 0 &&
      page * FETCH_LIMIT === quotes.length &&
      quotes.length < quotesData.total,
    [quotesData.total, quotes.length, page]
  );

  useEffect(() => {
    if (quotesData.docs)
      setQuotes(prevQuotes => prevQuotes.concat(quotesData.docs));
  }, [quotesData]);

  const handleFetch = () => {
    fetchQuotes();
    setShowQuotes(true);
  };
  const handleLoadMore = () => {
    if (!isLoadingQuotes && hasMoreQuotes) {
      setPage(page => page + 1);
    }
    return;
  };
  const charactersById = { [character._id]: character };
  const attributes = getCharacterAttributes(character);

  console.log('isLoadingQuotes ', isLoadingQuotes);
  console.log('quotes ', quotes);

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
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <DrawerContent bg="gray.700" boxShadow="xl">
          <DrawerCloseButton color="white" _focus={{ outline: 'none' }} />
          <DrawerHeader color="white">{character.name}</DrawerHeader>
          <DrawerBody>
            <FlexColumn gap={10} h="full">
              {attributes.length > 0 && (
                <Flex flexWrap="wrap" gap={3} mt={5}>
                  {attributes.map(({ label, value }, index, list) => {
                    const isLastItem = index === list.length - 1;
                    return (
                      <Tag
                        key={index}
                        size="sm"
                        borderRadius="full"
                        variant="outline"
                        px={4}
                        py={2}
                        as={Flex}
                        alignItems="center"
                        gap={1}
                      >
                        <Text fontSize="xs" color="gray.300" noOfLines={5}>
                          {label}:
                        </Text>
                        {isLastItem ? (
                          <Link
                            fontSize="sm"
                            href={value}
                            isExternal
                            color="blue.400"
                            w="fit-content"
                          >
                            {value}{' '}
                          </Link>
                        ) : (
                          <Text fontSize="sm" color="white" noOfLines={5}>
                            {value}
                          </Text>
                        )}
                      </Tag>
                    );
                  })}
                </Flex>
              )}
              <FlexColumn flex={1} gap={6}>
                {quotes.length === 0 && !showQuotes && (
                  <Button
                    colorScheme="orange"
                    size="sm"
                    width="fit-content"
                    px={6}
                    onClick={handleFetch}
                    mb={2}
                    leftIcon={<GoQuote />}
                    iconSpacing={1}
                  >
                    See quites from {character.name}
                  </Button>
                )}
                {showQuotes && (
                  <QuotesLayout
                    charactersById={charactersById}
                    quotes={quotes}
                    loading={isLoadingQuotes}
                    onLoadMore={handleLoadMore}
                    hasMore={hasMoreQuotes}
                    error={quotesError?.message}
                  />
                )}
              </FlexColumn>
            </FlexColumn>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CharacterInfo;

import { Flex, Text, Icon, Button } from '@chakra-ui/react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FlexColumn, MotionFlexColumn } from 'components/common';
import CharacterInfoDrawer from 'components/features/movieDetails/characters/CharacterInfoDrawer';
import { CharacterType } from 'types/character';

type CharacterCardProps = {
  character: CharacterType;
};
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <MotionFlexColumn
      whileHover={{
        y: -1,
        scale: 1.01,
      }}
      shadow="md"
      maxH="fit-content"
      pos="relative"
      bg="gray.800"
      p={{ base: 3, md: 4 }}
      h="90px"
    >
      <Flex w="full" maxH="fit-content" justify="space-between">
        <Icon as={FaUserCircle} boxSize="3em" color="gray.300" />
        <FlexColumn h="full" flex={1} pl={{ base: 5, md: 0, lg: 5 }}>
          <Text color="white" fontSize="md" fontWeight={500} noOfLines={1}>
            {character.name}
          </Text>
          <Flex gap={1} align="center">
            <Text fontSize="xs" color="gray.200" noOfLines={5}>
              Race:
            </Text>
            <Text fontSize="sm" color="orange.400" noOfLines={5}>
              {character.race}
            </Text>
          </Flex>
          <CharacterInfoDrawer
            character={character}
            triggerFunc={({ trigger }) => (
              <Button
                fontSize="sm"
                color="blue.400"
                w="fit-content"
                variant="link"
                colorScheme="blue"
                onClick={() => trigger()}
                _focus={{ outline: 'none' }}
              >
                More Information
              </Button>
            )}
          />
        </FlexColumn>
      </Flex>
    </MotionFlexColumn>
  );
};

export default CharacterCard;

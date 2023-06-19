import { Flex, Text, Icon, Button } from '@chakra-ui/react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FlexColumn, MotionFlex } from 'components/common';
import CharacterInfoDrawer from 'components/features/movieDetails/characters/CharacterInfoDrawer';
import { CharacterType } from 'types/character';

type CharacterCardProps = {
  character: CharacterType;
};
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <MotionFlex
      whileHover={{
        y: -1,
        scale: 1.01,
      }}
      shadow="md"
      pos="relative"
      bg="gray.800"
      py={{ base: 3, md: 3 }}
      px={{ base: 3, md: 4 }}
      h="90px"
      align="center"
    >
      <Icon as={FaUserCircle} boxSize="3em" color="gray.300" />
      <FlexColumn
        h="full"
        flex={1}
        pl={{ base: 5, md: 0, lg: 5 }}
        justify="space-between"
      >
        <Text color="white" fontSize="md" fontWeight={500} noOfLines={1}>
          {character.name}
        </Text>
        <Flex gap={1} align="center">
          <Text fontSize="xs" color="gray.200">
            Race:
          </Text>
          <Text fontSize="sm" color="orange.400" noOfLines={1}>
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
    </MotionFlex>
  );
};

export default CharacterCard;

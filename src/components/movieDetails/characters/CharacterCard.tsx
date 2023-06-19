import { Flex, Heading, Text, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FlexColumn, MotionFlexColumn } from 'components/common';
import { CharacterType } from 'types/character';

type MovieCharacterProps = {
  character: CharacterType;
};
const MovieCharacter: React.FC<MovieCharacterProps> = ({ character }) => {
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
    >
      <Flex w="full" maxH="fit-content">
        <Icon as={FaUserCircle} boxSize="3em" color="gray.300" />
        <FlexColumn flex={1} pl={{ base: 5, md: 0, lg: 5 }} gap={0}>
          <Heading color="white" as="h4" size="md">
            {character.name}
          </Heading>
          <Flex gap={1} align="center">
            <Text fontSize="xs" color="gray.200" noOfLines={5}>
              Race:
            </Text>
            <Text fontSize="sm" color="orange.400" noOfLines={5}>
              {character.race}
            </Text>
          </Flex>
          <Link
            fontSize="sm"
            display="flex"
            alignItems="center"
            href={character.wikiUrl}
            isExternal
            color="blue.400"
            w="fit-content"
            gap={1}
          >
            More info
          </Link>
        </FlexColumn>
      </Flex>
    </MotionFlexColumn>
  );
};

export default MovieCharacter;

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
} from '@chakra-ui/react';
import React from 'react';
import { CharacterType } from 'types/character';
import { getCharacterAttributes } from 'utils/movieUtils';

type CharacterInfoProps = {
  character: CharacterType;
  triggerFunc({ trigger }: { trigger(): void }): React.ReactNode;
};
const CharacterInfo: React.FC<CharacterInfoProps> = ({
  character,
  triggerFunc,
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  const attributes = getCharacterAttributes(character);
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CharacterInfo;

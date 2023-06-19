import {
  Flex,
  Container,
  Box,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { FiHome } from 'react-icons/fi';
import { Logo } from 'components/common';

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
  visible: boolean;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, path: '/', visible: true },
];

const NavBar = () => {
  return (
    <>
      <Flex
        zIndex={5}
        w="full"
        minH="75px"
        maxH="75px"
        bg="black"
        borderBottom={'0.2px solid'}
        borderBottomColor={'orange'}
        shadow="sm"
      >
        <Flex as="nav" w="full" h="full" align="center">
          <Container py={1.5} maxW="7xl" h="full" alignItems="center">
            <Flex
              justify="space-between"
              align="center"
              h="full"
              columnGap={20}
            >
              <Box display={{ base: 'block', md: 'block' }}>
                <Link href="/" passHref>
                  <ChakraLink color="white" _focus={{ outline: 'none' }}>
                    <Logo />
                  </ChakraLink>
                </Link>
              </Box>

              <Flex justify="end" align="center" columnGap={5}>
                {LinkItems.map((item, index) => (
                  <Link href={item.path} passHref key={index}>
                    <Button
                      as={ChakraLink}
                      variant="link"
                      colorScheme="white"
                      color="white"
                      leftIcon={<item.icon />}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;

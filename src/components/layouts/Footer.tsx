import { Container, Flex, Text, Box } from '@chakra-ui/react';

const Footer = () => (
  <Box
    w="full"
    minH="70px"
    boxSizing="border-box"
    bg="blackAlpha.500"
    borderTop="0.1px solid"
    borderTopColor="orange.400"
    mt={12}
  >
    <Container as="footer" role="contentinfo" maxW="7xl" h="full">
      <Flex
        gap={{ base: '4', md: '5' }}
        justify="space-between"
        align="center"
        h="full"
      >
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} LOTR. All rights reserved.
        </Text>
      </Flex>
    </Container>
  </Box>
);

export default Footer;

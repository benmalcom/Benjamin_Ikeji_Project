import { Container, Heading, Text } from '@chakra-ui/react';
import { FlexColumn } from 'components/common';

const Hero = () => (
  <FlexColumn
    h={{ sm: 'fit-content', '2xl': '25vh' }}
    w="full"
    align={{ sm: 'unset', xl: 'center' }}
    justify="center"
    mb={10}
  >
    <Container
      as={FlexColumn}
      py={1.5}
      px={8}
      maxW="3xl"
      h="full"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        textAlign="center"
        color="whiteAlpha.900"
        textTransform="uppercase"
      >
        Welcome to the
      </Text>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} color="white">
        Lord of the Rings Trilogy
      </Heading>
      <Text
        fontSize={{ base: 'sm', md: 'lg' }}
        textAlign="center"
        color="whiteAlpha.900"
      >
        Explore your favourite movies below
      </Text>
    </Container>
  </FlexColumn>
);

export default Hero;

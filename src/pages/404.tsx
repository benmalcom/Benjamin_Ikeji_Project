import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <Flex align="center" justify="center" h="full" w="full">
      <Box textAlign="center" py={10} px={6}>
        <Heading display="inline-block" as="h2" size="2xl" color="white">
          404
        </Heading>
        <Text fontSize="18px" color="white" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          The page you're looking for does not seem to exist
        </Text>
        <Link href="/" passHref>
          <Button
            as="a"
            colorScheme="gray"
            bgGradient="linear(to-r, gray.400, gray.500, gray.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default NotFound;

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Image } from '@chakra-ui/react';

export const Logo = () => (
  <Image
    w={{ base: '50px', md: '60px', lg: '70px' }}
    src="/images/lotr/lotrlogo.png"
    alt="Lotr logo"
  />
);

export default Logo;

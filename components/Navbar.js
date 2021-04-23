import React from 'react';
import NextLink from 'next/link';

import {
  Box,
  Heading,
  Link,
} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box py={4} px={8}>
      <Heading as="h1" size="lg">
        <NextLink href="/" passHref>
          <Link>Linkai Wu</Link>
        </NextLink>
      </Heading>
    </Box>
  )
}

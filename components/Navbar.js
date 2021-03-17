import React from 'react'

import {
  Box,
  Heading,
  Link,
} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box py={4} px={8}>
      <Heading as="h1" size="lg">
        <Link href="/">Linkai Wu</Link>
      </Heading>
    </Box>
  )
}

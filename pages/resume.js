import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


import {
  Container,
  Text,
  Heading,
  Link,
  Image,
} from '@chakra-ui/react';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Linkai Wu</title>
      </Head>

      <Navbar/>

      <Container maxW="container.lg" minH="100vh" py={12} align="center">
        <Heading as="h1" size="2xl" m={4}>Resume coming soon!</Heading>
        <Text fontSize={18}>
          Need one now? Contact me by sending me an <Link href="mailto:linkai861@gmail.com" color="brand.500" fontWeight="semibold">email</Link>.
        </Text>
        <Image 
          src="https://pbs.twimg.com/media/EDjb5pYXkAAjlLw.png"
          w={256}
          m={8}
        />
      </Container>

      <Footer/>
    </>
  )
}

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

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Uh oh 404!! – Linkai Wu</title>
      </Head>

      <Navbar/>

      <Container maxW="container.lg" minH="100vh" py={12} align="center">
        <Heading as="h1" size="2xl" m={4}>Uh oh 404!!</Heading>
        <Text fontSize={18}>
          Try checking the URL or head back to the <Link href="/" color="brand.500" fontWeight="semibold">homepage</Link>.
        </Text>
        <Image 
          src="https://avatars0.githubusercontent.com/u/57511576?s=400&u=06d05d14972c793f6849d80fe349194f453fb70c&v=4"
          w={256}
          m={8}
        />
      </Container>

      <Footer/>
    </>
  )
}

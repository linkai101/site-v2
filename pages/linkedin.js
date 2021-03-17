import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


import {
  Container,
  Text,
  Heading,
  Image,
  Link,
} from '@chakra-ui/react';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Linkedin - Linkai Wu</title>
      </Head>

      <Navbar/>

      <Container maxW="container.lg" minH="100vh" py={12} align="center">
        <Heading as="h1" size="2xl" m={4}>I'm too young to have a Linkedin :((</Heading>
        <Text fontSize={18}>
          Meanwhile, check out my <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" color="brand.500" fontWeight="semibold">YouTube</Link>!
        </Text>
        <Image 
          src="https://workshops.hackclub.com/content/workshops/orpheus/img/dinosaur_coming_from_the_future_to_destroy_humanity.png"
          w={256}
          m={8}
        />
      </Container>

      <Footer/>
    </>
  )
}

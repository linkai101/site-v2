/* TEMPORARY PAGE UNTIL I GET A LINKEDIN */

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
          src="https://avatars.githubusercontent.com/u/14136442?s=460&u=051edb5c3d2cd606133112bae58d34e3e4d9b326&v=4"
          w={256}
          m={8}
        />
      </Container>

      <Footer/>
    </>
  )
}

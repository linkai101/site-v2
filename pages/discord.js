import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


import {
  Container,
  Text,
  Heading,
  Image,
} from '@chakra-ui/react';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Discord - Linkai Wu</title>
      </Head>

      <Navbar/>

      <Container maxW="container.lg" minH="100vh" py={12} align="center">
        <Heading as="h1" size="2xl" m={4}>linkai101#4245</Heading>
        <Text fontSize={18}>
          My discord tag ^
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

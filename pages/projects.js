import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

const projects = require('../data/projects.json');

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects – Linkai Wu</title>
      </Head>

      <Navbar/>

      <Container maxW="container.lg" minH="100vh">
        <Box as="header" align="center" px={8} py={16}>
          <Heading as="h1" size="3xl">Projects</Heading>
        </Box>
        <Stack direction="column" spacing={8} pb={12}>
          {projects.map(({ name, url, description, github }) => (
            <Box as="article" py={4} key={name}>
              <Heading size="lg" color="brand.600">
                <Link href={url} isExternal>{name}</Link> {github && <Link href={github} color="gray" fontSize="lg" isExternal>(GitHub)</Link>}
              </Heading>
              <Text my={2} fontSize={18} fontWeight="semibold">
              {description}
              </Text>
            </Box>
          ))}
          {projects.length === 0 &&
            <Text my={2}>Nothing here yet.</Text>
          }
        </Stack>
      </Container>

      <Footer/>
    </>
  )
}
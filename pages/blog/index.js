import React from 'react';
import Head from 'next/head';
import { getSortedPosts } from "../../lib/posts";

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

export default function BlogPage({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog - Linkai Wu</title>
      </Head>

      <Navbar/>

      <Container maxW="container.lg">
        <Box as="header" align="center" px={8} py={16}>
          <Heading as="h1" size="3xl">Blog</Heading>
        </Box>
        <Stack direction="column" spacing={8} pb={12}>
          {allPostsData.map(({ slug, date, title, category, excerpt }) => (
            <Box as="article" py={4} key={slug}>
              <Heading size="lg" color="brand.600">
                <Link href={`/blog/${slug}`}>{title}</Link>
              </Heading>
              <Text my={2} fontSize={18} fontWeight="semibold">
                {category} <Text as="span" m={1} color="brand.600">//</Text> {date}
              </Text>
              <Text noOfLines={2}>
                {excerpt}
              </Text>
            </Box>
          ))}
        </Stack>
      </Container>

      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
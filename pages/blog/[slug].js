import React from 'react';
import Head from 'next/head';
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import components from "../../lib/blogcomponents.js";

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import {
  Box,
  Container,
  Text,
  Heading,
} from '@chakra-ui/react';

export default function BlogPostPage({ source, frontMatter }) {
  const content = hydrate(source, { components });

  return (
    <>
      <Head>
        <title>{frontMatter.title} - Linkai Wu</title>
      </Head>

      <Navbar/>

      <Container maxW="container.lg" minH="100vh">
        <Box as="header" align="center" px={8} py={16}>
          <Heading as="h1" size="3xl" mb={8}>{frontMatter.title}</Heading>
          <Text fontSize={18} fontWeight="semibold">
            {frontMatter.author} <Text as="span" m={1} color="brand.600">//</Text> {frontMatter.category} <Text as="span" m={1} color="brand.600">//</Text> {frontMatter.date}
          </Text>
        </Box>
        <Box pb={12}>
          {content}
        </Box>
      </Container>

      <Footer/>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostData(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    components,
    scope: data
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
}
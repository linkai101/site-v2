import React from 'react';
import { getSortedPosts } from "../lib/posts";

import Footer from '../components/Footer.js';

import {
  Box,
  Container,
  Flex,
  Stack,
  Center,
  Text,
  Heading,
  Image,
  IconButton,
  Link,
  Tooltip,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faDiscord, faYoutube, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MAX_POSTS = 5;
const MAX_PROJECTS = 5;

const socials = require('../data/socials.json');
const projects = require('../data/projects.json');
const portal = require('../data/portal.json');

export default function Home({ recentPostsData }) {
  return (
    <>
      <Box minH="100vh">
        <Welcome/>
        <Main recentPostsData={recentPostsData}/>
      </Box>
      <Footer/>
    </>
  )
}

function Welcome() {
  return (
    <>
      <Container maxW="container.lg">
        <Flex h={{ base: "auto", md: "50vw" }} maxH={{ base: "auto", md: 512 }}>
          <Center w={{ base: "100%", md: "auto" }}>
            <Box p="4" textAlign={{ base: "center", md: "left" }} maxW={{ base: "100%", md: "50vw", lg: 496 }}>
              <Heading as="h1" fontSize={{ base: 48, md: "8vw", lg: 78 }} color="brand.600" my={2}>
                Linkai Wu
              </Heading>
              <Heading as="h2" fontSize={{ base: 18, md: "3vw", lg: 30 }} color="gray.600" fontWeight="semibold">
                HS sophomore, software engineer, techie, epic gamer
              </Heading>
              <Stack direction="row" spacing={2} my={6} justify={{ base: "center", md: "left" }}>
                <Tooltip label="GitHub">
                  <Link href={socials.github} isExternal><IconButton icon={<FontAwesomeIcon icon={faGithub}/>}/></Link>
                </Tooltip>
                <Tooltip label="Linkedin">
                  <Link href={socials.linkedin} isExternal><IconButton icon={<FontAwesomeIcon icon={faLinkedin}/>}/></Link>
                </Tooltip>
                <Tooltip label="Email">
                  <Link href={socials.email}><IconButton icon={<FontAwesomeIcon icon={faEnvelope}/>}/></Link>
                </Tooltip>
                <Tooltip label="YouTube">
                  <Link href={socials.youtube} isExternal><IconButton icon={<FontAwesomeIcon icon={faYoutube}/>}/></Link>
                </Tooltip>
                <Tooltip label="Twitch">
                  <Link href={socials.twitch} isExternal><IconButton icon={<FontAwesomeIcon icon={faTwitch}/>}/></Link>
                </Tooltip>
                <Tooltip label="Instagram">
                  <Link href={socials.instagram} isExternal><IconButton icon={<FontAwesomeIcon icon={faInstagram}/>}/></Link>
                </Tooltip>
                <Tooltip label="Discord">
                  <Link href={socials.discord} isExternal><IconButton icon={<FontAwesomeIcon icon={faDiscord}/>}/></Link>
                </Tooltip>
              </Stack>
            </Box>
          </Center>
          <Box flex={1} align="center" pt={4} display={{ base: "none", md: "block" }}>
            <Image w={{ base: 460, md: "100%" }} src="/images/astronaut.png"/>
          </Box>
        </Flex>
      </Container>

      <Box bg="brand.600" color="white">
        <Container maxW="container.lg" p={4} lineHeight={1.2}>
          <Text fontSize={{ base: 23, md: "3vw", lg: 30 }} fontWeight="bold" fontStyle="italic">
            ""You miss 100% of the shots you don't take.
          </Text>
          <Text fontSize={{ base: 15, md: "2vw", lg: 20 }} fontWeight="bold" fontStyle="italic" ml={4}>- Wayne Gretzky"</Text>
          <Text fontSize={{ base: 15, md: "2vw", lg: 20 }} fontWeight="bold" fontStyle="italic" ml={10}>- Michael Scott"</Text>
          <Text fontSize={{ base: 15, md: "2vw", lg: 20 }} fontWeight="bold" fontStyle="italic" ml={16}>- Linkai Wu</Text>
        </Container>
      </Box>
    </>
  );
}

function Main({ recentPostsData }) {
  return (
    <>
      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }}>
          {/* MAIN COLUMN */}
          <Box px={4} w={{ base: "100%", md: "60%" }}>
            <About/>
            <Blog recentPostsData={recentPostsData}/>
          </Box>
          {/* SIDE COLUMN */}
          <Box px={4} w={{ base: "100%", md: "40%" }}>
            <Portal/>
            <Projects/>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

function About() {
  return (
    <Box as="section" py={4}>
      <Heading as="h2" size="lg" mb={4}>👋 About</Heading>
      <Text my={4}>
        I'm a high school sophomore from Maryland, and I'm a student, programmer, techie, and a gamer.
      </Text>
      <Text my={4}>
        As a STEM student at Montgomery Blair HS, I am very passionate about all things tech and computer science,
        and I strive to learn, grow, and make a difference in my community.
        My interests include but are not limited to full-stack and frontend development, software engineering, and 
        AI + machine learning.
        Technology and STEM aside, I also enjoy gaming, listening and playing music, educating and tutoring, and more.
      </Text>
      <Text>
        Thank you for visiting my website! I am routinely updating the content on this page as well as my blog and 
        projects page as I learn and make new things. Feel free to look around and come say hi!
      </Text>
    </Box>
  );
}

function Blog({ recentPostsData }) {
  return (
    <Box as="section" py={4}>
      <Heading as="h2" size="lg" mb={4}>📝 Latest from the Blog</Heading>
      {recentPostsData.map(({ slug, date, title, category, excerpt }) => (
        <Box as="article" py={4} key={slug}>
          <Text fontSize={22} color="brand.600" fontWeight="bold">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </Text>
          <Text my={2} fontSize={18} fontWeight="semibold">
            {category} <Text as="span" m={1} color="brand.600">//</Text> {date}
          </Text>
          <Text noOfLines={2}>
            {excerpt}
          </Text>
        </Box>
      ))}
      {recentPostsData.length === 0 &&
        <Text my={2}>Nothing here yet.</Text>
      }
      <Text my={4} color="brand.500" fontSize={18} fontWeight="bold">
        <Link href="/blog">View All Posts &nbsp;<FontAwesomeIcon icon={faChevronRight}/></Link>
      </Text>
    </Box>
  );
}

function Portal() {
  return (
    <Box as="section" py={4}>
      <Heading as="h3" fontSize="1.5rem" mb={4}>✨ Portal</Heading>
      {portal.map(({ name, url, description }) => 
        <Box as="article" py={4} key={name}>
          <Text mb={2} fontSize={22} color="brand.600" fontWeight="bold">
            <Link href={url}>{name}</Link>
          </Text>
          <Text>
            {description}
          </Text>
        </Box>
      )}
    </Box>
  );
}

function Projects() {
  return (
    <Box as="section" py={4}>
      <Heading as="h3" fontSize="1.5rem" mb={4}>💼 Featured Projects</Heading>
      {projects.slice(0,MAX_PROJECTS).map(({ name, url, description, github }) => 
        <Box as="article" py={4} key={name}>
          <Text mb={2} fontSize={22} color="brand.600" fontWeight="bold">
            <Link href={url} isExternal>{name}</Link> {github && <Link href={github} color="gray" fontSize="md" isExternal>(GitHub)</Link>}
          </Text>
          <Text>
            {description}
          </Text>
        </Box>
      )}
      {projects.length === 0 &&
        <Text my={2}>Nothing here yet.</Text>
      }
      <Text my={4} color="brand.500" fontSize={18} fontWeight="bold">
        <Link href="/projects">View All Projects &nbsp;<FontAwesomeIcon icon={faChevronRight}/></Link>
      </Text>
    </Box>
  );
}

export async function getStaticProps() {
  const recentPostsData = getSortedPosts(MAX_POSTS);
  return {
    props: {
      recentPostsData,
    },
  };
}
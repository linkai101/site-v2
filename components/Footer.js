import React from 'react';

import ColorModeToggle from './ColorModeToggle';

import {
  Flex,
  Stack,
  Text,
  Link,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faDiscord, faYoutube, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const socials = require('../data/socials.json');

export default function Footer() {
  return (
    <Flex p={4}
      justify="space-between" direction={{ base: "column", md: "row" }}
      bg="purple.600" color="white"
    >
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Text m={2}><Link href="/">&copy; Linkai Wu</Link></Text>
        <Stack m={2} spacing={3} direction="row" align="center" fontWeight="bold">
          <Link href={socials.resume} isExternal>Resume</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
        </Stack>
      </Flex>
      <Stack m={2} spacing={4} direction="row" justify="center" align="center">
        <ColorModeToggle color={useColorModeValue("purple.700", "white")}/>
        <Tooltip label="GitHub">
          <Link href={socials.github} isExternal><FontAwesomeIcon icon={faGithub}/></Link>
        </Tooltip>
        <Tooltip label="Linkedin">
          <Link href={socials.linkedin} isExternal><FontAwesomeIcon icon={faLinkedin}/></Link>
        </Tooltip>
        <Tooltip label="Email">
          <Link href={socials.email}><FontAwesomeIcon icon={faEnvelope}/></Link>
        </Tooltip>
        <Tooltip label="YouTube">
          <Link href={socials.youtube} isExternal><FontAwesomeIcon icon={faYoutube}/></Link>
        </Tooltip>
        <Tooltip label="Twitch">
          <Link href={socials.twitch} isExternal><FontAwesomeIcon icon={faTwitch}/></Link>
        </Tooltip>
        <Tooltip label="Instagram">
          <Link href={socials.instagram} isExternal><FontAwesomeIcon icon={faInstagram}/></Link>
        </Tooltip>
        <Tooltip label="Discord">
          <Link href={socials.discord} isExternal><FontAwesomeIcon icon={faDiscord}/></Link>
        </Tooltip>
      </Stack>
    </Flex>
  )
}

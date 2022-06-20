import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Logo } from './Logo';

export const Footer = () => (
  <Container
    maxW="full"
    as="footer"
    bg="gray.100"
    py={{ base: '12', md: '16' }}
  >
    <Stack maxW="container.sm" mx="auto" spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost" aria-label="Social links">
          <IconButton
            as="a"
            href="https://www.linkedin.com/company/74529112/"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://github.com/storybookjs/"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://twitter.com/storybookjs/"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        The MIT License (MIT)
      </Text>
    </Stack>
  </Container>
);

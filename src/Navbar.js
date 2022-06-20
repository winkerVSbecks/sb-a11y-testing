import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import { StorybookIcon } from './StorybookIcon';

const navLinks = [
  { label: 'Showcase', link: '/showcase' },
  { label: 'Docs', link: '/docs' },
  { label: 'Blog', link: '/blog' },
];

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container maxW="container.sm" py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Link href="/" aria-label="home">
              <StorybookIcon />
            </Link>
            {isDesktop ? (
              <ButtonGroup variant="link" colorScheme="primary" spacing="8">
                {navLinks.map((item) => (
                  <Button as="a" href={item.link} key={item.label}>
                    {item.label}
                  </Button>
                ))}
              </ButtonGroup>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

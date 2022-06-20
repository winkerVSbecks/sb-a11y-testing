import * as React from 'react';
import { Container, Heading, Box, Text, VStack } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Stats } from './Stats';
import { AddProject } from './AddProject';
import { Footer } from './Footer';
import { Glossary } from './Glossary';

export const DashboardScreen = ({ glossary, stats }) => (
  <>
    <Navbar />
    <Container maxW="container.sm" pb={{ base: '16', md: '24' }}>
      <VStack alignItems="flex-start" spacing={12}>
        <header>
          <Heading as="h3" size="xl" mb={4}>
            Component Encyclopedia dashboard
          </Heading>
          <Text fontSize="xl" color="gray.600">
            A catalog of public components, libraries, and design systems for
            folks to reference as they build UIs.
          </Text>
        </header>

        <Box as="section" width="full">
          <Heading as="h2" size="lg" mb={4}>
            Latests stats
          </Heading>
          <Text mb={6}>
            Projects are regularly crawled to get accurate and updated health
            metrics.
          </Text>
          <Stats data={stats} />
        </Box>

        <Box as="section" width="full">
          <Heading size="lg" mb={4}>
            Tools
          </Heading>
          <Text mb={8}>Modify and/or explore the project database</Text>

          <Heading as="h2" size="md" mb={4}>
            Add a project
          </Heading>
          <AddProject />

          <Heading as="h2" size="md" mb={4}>
            Glossary explorer
          </Heading>
          <Glossary definitions={glossary} />
        </Box>
      </VStack>
    </Container>
    <Footer />
  </>
);

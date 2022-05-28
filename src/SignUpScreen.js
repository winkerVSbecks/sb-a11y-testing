import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Center,
  useBreakpointValue,
  useColorModeValue,
  Container,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { SignUpForm } from './SignUpForm';

const logoAnimation = keyframes({
  0: {
    transform: 'rotateY(0deg)',
    transformOrigin: '50% 5% 0',
  },
  '100%': {
    transform: 'rotateY(360deg)',
    transformOrigin: '50% 5% 0',
  },
});

const StorybookLogo = ({ transacting }) => (
  <Center>
    <Flex>
      <Box
        as="svg"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 16 20"
        height="40px"
        css={
          transacting && {
            transformStyle: 'preserve-3d',
            animation: `${logoAnimation} 1250ms both infinite`,
          }
        }
      >
        <path
          fill="#FF4785"
          d="M.62 18.43L0 1.92A1.006 1.006 0 01.944.88l14.04-.878a1.005 1.005 0 011.069 1.004v17.989a1.006 1.006 0 01-1.051 1.004L1.58 19.396a1.006 1.006 0 01-.96-.967z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M13.88.071l-1.932.12-.094 2.267a.15.15 0 00.24.126l.88-.668.744.586a.15.15 0 00.243-.123l-.08-2.308zm-1.504 7.59c-.353.275-2.989.462-2.989.071.056-1.493-.612-1.558-.984-1.558-.352 0-.946.106-.946.906 0 .815.868 1.275 1.887 1.815 1.447.767 3.2 1.696 3.2 4.032 0 2.24-1.82 3.476-4.14 3.476-2.395 0-4.488-.969-4.252-4.328.093-.394 3.138-.3 3.138 0-.038 1.386.278 1.794 1.076 1.794.613 0 .891-.338.891-.906 0-.861-.904-1.369-1.945-1.953-1.409-.791-3.067-1.722-3.067-3.859 0-2.132 1.466-3.554 4.084-3.554 2.618 0 4.047 1.4 4.047 4.064z"
          clipRule="evenodd"
        ></path>
      </Box>
      <Box
        as="svg"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 78 20"
        height="40px"
        ml={3}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.432 15.83a8.78 8.78 0 0 1-2.464-.343c-.79-.23-1.445-.546-1.968-.952l.8-1.776c1.088.758 2.31 1.136 3.664 1.136.704 0 1.245-.114 1.624-.344.379-.23.568-.546.568-.952 0-.362-.173-.645-.52-.848-.347-.202-.963-.4-1.848-.592-.992-.202-1.784-.448-2.376-.736C1.32 10.135.888 9.78.616 9.359c-.272-.42-.408-.94-.408-1.56 0-.682.19-1.29.568-1.824.379-.533.91-.952 1.592-1.256.683-.304 1.472-.456 2.368-.456.8 0 1.57.118 2.312.352.741.235 1.33.55 1.768.944l-.8 1.776C6.981 6.578 5.893 6.2 4.752 6.2c-.65 0-1.163.126-1.536.376s-.56.595-.56 1.032c0 .256.072.467.216.632.144.166.384.312.72.44.336.128.813.262 1.432.4 1.45.32 2.493.73 3.128 1.232.635.502.952 1.195.952 2.08 0 1.067-.41 1.907-1.232 2.52-.821.614-1.968.919-3.44.919Zm10.464-1.791c.245 0 .502-.016.768-.048l-.128 1.76a6.763 6.763 0 0 1-.928.064c-1.195 0-2.067-.261-2.616-.784-.55-.522-.824-1.317-.824-2.384V9.64H9.68V7.83h1.488V5.528h2.416V7.83h1.968V9.64h-1.968v2.992c0 .939.438 1.408 1.312 1.408v-.001Zm5.616 1.776c-.832 0-1.563-.168-2.192-.504a3.534 3.534 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168.334-.606.84-1.1 1.456-1.416.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.33 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504Zm0-1.84c1.173 0 1.76-.752 1.76-2.256 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.256 1.76 2.256ZM31.36 9.624 30 9.768c-.672.064-1.146.253-1.424.567-.277.315-.416.734-.416 1.256v4.097h-2.416V7.832h2.32V9.16c.395-.907 1.21-1.403 2.448-1.488l.704-.048.144 2Zm7.02-1.777h2.368l-4.736 10.72h-2.448l1.504-3.312-3.232-7.408h2.512l1.984 4.992 2.048-4.992Zm7.968-.208c.683 0 1.285.166 1.808.496.523.33.93.803 1.224 1.416.293.614.44 1.326.44 2.136s-.147 1.529-.44 2.152c-.293.624-.704 1.11-1.232 1.457a3.207 3.207 0 0 1-1.8.52 3.12 3.12 0 0 1-1.472-.345 2.45 2.45 0 0 1-1.008-.951v1.168h-2.384V4.408H43.9v4.48a2.388 2.388 0 0 1 1-.92 3.16 3.16 0 0 1 1.448-.33Zm-.704 6.337c.566 0 1.003-.2 1.312-.6.31-.4.464-.963.464-1.688 0-.715-.154-1.262-.464-1.64-.31-.38-.746-.57-1.312-.57-.565 0-1.002.196-1.312.586-.31.389-.464.94-.464 1.655 0 .726.155 1.283.464 1.673.31.389.747.584 1.312.584Zm9.424 1.84c-.832 0-1.563-.17-2.192-.505a3.534 3.534 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168.334-.606.84-1.1 1.456-1.416.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.33 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.505-2.192.505Zm0-1.84c1.174 0 1.76-.753 1.76-2.257 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.257 1.76 2.257Zm9.008 1.84c-.832 0-1.563-.17-2.192-.505a3.534 3.534 0 0 1-1.456-1.424c-.341-.613-.512-1.336-.512-2.168 0-.832.17-1.554.512-2.168.334-.606.84-1.1 1.456-1.416.63-.33 1.36-.496 2.192-.496.832 0 1.563.166 2.192.496.63.33 1.115.803 1.456 1.416.341.614.512 1.336.512 2.168 0 .832-.17 1.555-.512 2.168a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.505-2.192.505Zm0-1.84c1.173 0 1.76-.753 1.76-2.257 0-.757-.152-1.322-.456-1.696-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.504.587 2.257 1.76 2.257Zm13.716 1.71h-2.96l-3.008-3.503v3.504h-2.416V4.407h2.416v6.784l2.896-3.344h2.88l-3.296 3.744 3.488 4.098v-.003Z"
          fill="#333"
        />
      </Box>
    </Flex>
  </Center>
);

StorybookLogo.propTypes = {
  transacting: PropTypes.bool,
};

const SignUpSuccess = () => (
  <Alert
    status="success"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Application submitted!
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      Thanks for submitting your application. Our team will get back to you
      soon.
    </AlertDescription>
  </Alert>
);

export const SignUpScreen = () => {
  const [formSubmission, setFormSubmission] = useState(null);

  const handleFormSubmit = useCallback(
    async ({ email, password }, { setSubmitting, resetForm }) => {
      setFormSubmission('SUBMITTING');
      setSubmitting(true);

      fetch('/sign-up', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then(() => {
          setSubmitting(false);
          setFormSubmission('SUBMITTING_SUCCESS');
          resetForm({
            values: { email: '', password: '', verifiedPassword: '' },
          });
        })
        .catch(() => {
          setSubmitting(false);
          setFormSubmission('SUBMITTING_FAILED');
        });
    },
    [setFormSubmission]
  );

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <StorybookLogo transacting={formSubmission === 'SUBMITTING'} />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Create an account to join the Storybook community
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button variant="link" colorScheme="brand">
                Log in
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <SignUpForm onSubmit={handleFormSubmit} />
        </Box>
      </Stack>
    </Container>
  );
};

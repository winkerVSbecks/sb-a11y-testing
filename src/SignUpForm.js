import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';

const errorMap = {
  email: {
    required: 'Please enter your email address',
    format: 'Please enter a correctly formatted email address',
  },
  password: {
    required: 'Please enter a password',
    length: 'Please enter a password of minimum 6 characters',
  },
  verifiedPassword: {
    required: 'Please verify your password',
    match: 'Your passwords do not match',
  },
};

// https://emailregex.com/
const emailRegExp = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validate = ({ email, password, verifiedPassword }) => {
  const errors = {};

  if (!email) {
    errors.email = errorMap.email.required;
  } else {
    const validEmail = email.match(emailRegExp);

    if (validEmail === null) {
      errors.email = errorMap.email.format;
    }
  }

  if (!password) {
    errors.password = errorMap.password.required;
  } else if (password.length < 6) {
    errors.password = errorMap.password.length;
  }

  if (!verifiedPassword) {
    errors.verifiedPassword = errorMap.verifiedPassword.required;
  } else if (password !== verifiedPassword) {
    errors.verifiedPassword = errorMap.verifiedPassword.match;
  }

  return errors;
};

export const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        verifiedPassword: '',
      }}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({
        touched,
        errors,
        values,
        isSubmitting,
        handleChange,
        handleBlur,
      }) => (
        <Stack
          as={Form}
          noValidate
          aria-disabled={isSubmitting ? 'true' : 'false'}
          spacing="6"
        >
          <Stack spacing="5">
            <FormControl
              colorScheme="brand"
              isRequired
              isInvalid={touched.email && errors.email}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
              {/* <Text color="red" mt={2}>
                {errors.email}
              </Text> */}
            </FormControl>
            <FormControl
              colorScheme="brand"
              isRequired
              isInvalid={touched.password && errors.password}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                data-testid="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              colorScheme="brand"
              isRequired
              isInvalid={touched.verifiedPassword && errors.verifiedPassword}
            >
              <FormLabel htmlFor="verifiedPassword">Verify Password</FormLabel>
              <Input
                id="verifiedPassword"
                data-testid="verifiedPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.verifiedPassword}
              />
              <FormErrorMessage>{errors.verifiedPassword}</FormErrorMessage>
            </FormControl>
          </Stack>
          <HStack>
            <Button colorScheme="brand" width="full" type="submit">
              Sign up
            </Button>
            <Button variant="outline" colorScheme="gray" width="full">
              Cancel
            </Button>
          </HStack>
        </Stack>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

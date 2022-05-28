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
    required: {
      normal: 'Please enter your email address',
      tooltip:
        'We do require an email address and a password as a minimum in order to be able to create an account for you to log in with',
    },
    format: {
      normal: 'Please enter a correctly formatted email address',
      tooltip:
        'Your email address is formatted incorrectly and is not correct - please double check for misspelling',
    },
  },
  password: {
    required: {
      normal: 'Please enter a password',
      tooltip: 'A password is required to create an account',
    },
    length: {
      normal: 'Please enter a password of minimum 6 characters',
      tooltip:
        'For security reasons we enforce a password length of minimum 6 characters - but have no other requirements',
    },
  },
  verifiedPassword: {
    required: {
      normal: 'Please verify your password',
      tooltip:
        'Verification of your password is required to ensure no errors in the spelling of the password',
    },
    match: {
      normal: 'Your passwords do not match',
      tooltip:
        'Your verification password has to match your password to make sure you have not misspelled',
    },
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
    errors.email = errorMap.email.required.normal;
    errors.emailTooltip = errorMap.email.required.tooltip;
  } else {
    const validEmail = email.match(emailRegExp);

    if (validEmail === null) {
      errors.email = errorMap.email.format.normal;
      errors.emailTooltip = errorMap.email.format.tooltip;
    }
  }

  if (!password) {
    errors.password = errorMap.password.required.normal;
    errors.passwordTooltip = errorMap.password.required.tooltip;
  } else if (password.length < 6) {
    errors.password = errorMap.password.length.normal;
    errors.passwordTooltip = errorMap.password.length.tooltip;
  }

  if (!verifiedPassword) {
    errors.verifiedPassword = errorMap.verifiedPassword.required.normal;
    errors.verifiedPasswordTooltip = errorMap.verifiedPassword.required.tooltip;
  } else if (password !== verifiedPassword) {
    errors.verifiedPassword = errorMap.verifiedPassword.match.normal;
    errors.verifiedPasswordTooltip = errorMap.verifiedPassword.match.tooltip;
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
      {({ touched, errors, values, handleChange, handleBlur }) => (
        <Stack as={Form} noValidate spacing="6">
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

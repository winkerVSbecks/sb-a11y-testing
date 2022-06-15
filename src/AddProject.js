import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
  Text,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';

const errorMap = {
  required: 'Please enter a Storybook URL',
  format: 'Please enter a correctly formatted URL',
};

// https://emailregex.com/
const urlRegExp = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
);

const validate = ({ storybookUrl }) => {
  const errors = {};

  if (!storybookUrl) {
    errors.storybookUrl = errorMap.required;
  } else {
    const validStorybookUrl = storybookUrl.match(urlRegExp);

    if (validStorybookUrl === null) {
      errors.storybookUrl = errorMap.format;
    }
  }

  return errors;
};

export const AddProject = ({ onSubmit }) => {
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
        <HStack
          as={Form}
          noValidate
          aria-disabled={isSubmitting ? 'true' : 'false'}
          spacing="3"
          mb={6}
          alignItems="flex-start"
        >
          <FormControl
            id="storybookUrl"
            isRequired
            // isInvalid={touched.storybookUrl && errors.storybookUrl}
          >
            <FormLabel srOnly>Storybook URL</FormLabel>
            <Input
              type="text"
              placeholder="Enter the URL for the Storybook"
              size="lg"
              fontSize="md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.storybookUrl}
            />
            {/* <FormErrorMessage>{errors.storybookUrl}</FormErrorMessage> */}
            {touched.storybookUrl && errors.storybookUrl && (
              <Text color="red" mt={2}>
                {errors.storybookUrl}
              </Text>
            )}
          </FormControl>
          <Button
            type="submit"
            fontWeight="bold"
            fontSize="md"
            colorScheme="brand"
            size="lg"
            isLoading={isSubmitting}
          >
            Import
          </Button>
        </HStack>
      )}
    </Formik>
  );
};

AddProject.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

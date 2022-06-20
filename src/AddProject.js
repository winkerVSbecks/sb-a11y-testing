import React, { useCallback } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
  Alert,
  AlertIcon,
  CloseButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';

const errorMap = {
  required: 'Please enter a Storybook URL',
  format: 'Please enter a correctly formatted URL',
};

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

export const AddProject = () => {
  const {
    isOpen: submitSuccessful,
    onClose: closeSuccessAlert,
    onOpen: openSuccessAlert,
  } = useDisclosure({ defaultIsOpen: false });

  const {
    isOpen: submitFailed,
    onClose: closeFailedAlert,
    onOpen: openFailedAlert,
  } = useDisclosure({ defaultIsOpen: false });

  const handleFormSubmit = useCallback(
    async ({ storybookUrl }, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      fetch('/project', {
        method: 'POST',
        body: JSON.stringify({ storybookUrl }),
      })
        .then((res) => res.json())
        .then(() => {
          setSubmitting(false);
          openSuccessAlert();
          resetForm({
            values: { storybookUrl: '' },
          });
        })
        .catch(() => {
          openFailedAlert();
          setSubmitting(false);
        });
    },
    [openSuccessAlert, openFailedAlert]
  );

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          verifiedPassword: '',
        }}
        onSubmit={handleFormSubmit}
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
            mb={8}
            alignItems="flex-start"
          >
            <FormControl
              id="storybookUrl"
              isRequired
              isInvalid={touched.storybookUrl && errors.storybookUrl}
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
              colorScheme="blue"
              size="lg"
              isLoading={isSubmitting}
            >
              Import
            </Button>
          </HStack>
        )}
      </Formik>
      {submitSuccessful && (
        <Alert status="success">
          <AlertIcon />
          Project added successfully
          <CloseButton ml="auto" onClick={closeSuccessAlert} />
        </Alert>
      )}
      {submitFailed && (
        <Alert status="error">
          <AlertIcon />
          Something went wrong. Unable to add this project.
          <CloseButton ml="auto" onClick={closeFailedAlert} />
        </Alert>
      )}
    </>
  );
};

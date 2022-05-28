import React from 'react';
import { rest } from 'msw';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignUpScreen } from './SignUpScreen';

export default {
  component: SignUpScreen,
  title: 'SignUpScreen',
  parameters: {
    backgrounds: { default: 'white' },
    layout: 'fullscreen',
  },
  argTypes: {
    onLogIn: { action: 'onLogIn' },
  },
};

const Template = (args) => <SignUpScreen {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.post('/sign-up', (req, res, ctx) => {
      const user = JSON.parse(req.body);

      return res(
        ctx.delay(2000),
        ctx.json({
          id: 1,
          ...user,
        })
      );
    }),
  ],
};

export const EmailValidationError = Template.bind({});
EmailValidationError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailInput = canvas.getByLabelText(/email/i);
  expect(emailInput).toBeRequired();
  userEvent.type(emailInput, 'marcus');

  emailInput.blur();
  // An element is valid if it has no aria-invalid attributes or an attribute value of "false".
  // The result of checkValidity() must also be true if it's a form element.

  waitFor(() => {
    expect(emailInput).toBeInvalid();
    expect(emailInput).toHaveAccessibleDescription(
      'Please enter a correctly formatted email address'
    );
  });
};

export const PasswordValidationError = Template.bind({});
PasswordValidationError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const passwordInput = canvas.getByTestId('password');
  expect(passwordInput).toBeRequired();
  userEvent.type(passwordInput, '1234');

  passwordInput.blur();
  waitFor(() => {
    expect(passwordInput).toBeInvalid();
    expect(passwordInput).toHaveAccessibleDescription(
      'Please enter a password of minimum 6 characters'
    );
  });
};

export const VerifyPasswordError = Template.bind({});
VerifyPasswordError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const passwordInput = canvas.getByTestId('password');
  userEvent.type(passwordInput, '123456');

  const verifiedPasswordInput = canvas.getByTestId('verifiedPassword');
  userEvent.type(verifiedPasswordInput, '12345678');

  verifiedPasswordInput.blur();

  waitFor(() => {
    expect(verifiedPasswordInput).toBeInvalid();
    expect(verifiedPasswordInput).toHaveAccessibleDescription(
      'Your passwords do not match'
    );
  });
};

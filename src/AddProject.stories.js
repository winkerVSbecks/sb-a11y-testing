import React from 'react';
import { rest } from 'msw';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { AddProject } from './AddProject';

export default {
  component: AddProject,
  title: 'Components/AddProject',
  argTypes: {
    onImport: { action: 'onImport' },
  },
};

const Template = (args) => <AddProject {...args} />;

export const Default = Template.bind({});

export const UrlValidationError = Template.bind({});
UrlValidationError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const urlInput = canvas.getByLabelText(/URL/i);
  expect(urlInput).toBeRequired();
  await userEvent.type(urlInput, 'my-storybook');
  await urlInput.blur();
};

export const SubmitFailed = Template.bind({});
SubmitFailed.parameters = {
  msw: [
    rest.post('/project', (req, res, ctx) => {
      return res(ctx.status(401));
    }),
  ],
};
SubmitFailed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const urlInput = canvas.getByLabelText(/URL/i);
  await userEvent.type(urlInput, 'my-storybook.com');

  const submitButton = canvas.getByRole('button', { name: /Import/i });
  await userEvent.click(submitButton);
};

export const SubmitSuccess = Template.bind({});
SubmitSuccess.parameters = {
  msw: [
    rest.post('/project', (req, res, ctx) => {
      const project = JSON.parse(req.body);

      return res(
        ctx.delay(1000),
        ctx.json({
          id: 83470,
          url: project.storybookUrl,
        })
      );
    }),
  ],
};
SubmitSuccess.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const urlInput = canvas.getByLabelText(/URL/i);
  await userEvent.type(urlInput, 'my-storybook.com');

  const submitButton = canvas.getByRole('button', { name: /Import/i });
  await userEvent.click(submitButton);
};

import React from 'react';
import { Glossary } from './Glossary';
import definitions from './glossary.json';

export default {
  component: Glossary,
  title: 'Components/Glossary',
};

const Template = (args) => <Glossary {...args} />;

export const Default = Template.bind({});
Default.args = {
  definitions: definitions,
};

import React from 'react';
import { Glossary } from './Glossary';

export default {
  component: Glossary,
  title: 'Glossary',
};

const Template = (args) => <Glossary {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { Stats } from './Stats';

export default {
  component: Stats,
  title: 'Dashboard/Stats',
};

const Template = (args) => <Stats {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      type: 'Projects',
      value: 85,
      delta: {
        value: 93.18,
        type: 'increase',
      },
    },
    {
      type: 'Components',
      value: 5132,
      delta: {
        value: 47.05,
        type: 'increase',
      },
    },

    {
      type: 'Stories',
      value: 15949,
      delta: {
        value: 9.05,
        type: 'decrease',
      },
    },
  ],
};

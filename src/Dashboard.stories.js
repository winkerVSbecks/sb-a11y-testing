import React from 'react';
import { Dashboard } from './Dashboard';
import { Default as StatsDefault } from './Stats.stories';

export default {
  component: Dashboard,
  title: 'Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: StatsDefault.args.data,
};

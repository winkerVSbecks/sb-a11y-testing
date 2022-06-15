import React from 'react';
import { DashboardScreen } from './DashboardScreen';
import { Default as StatsDefault } from './Stats.stories';
import { Default as GlossaryDefault } from './Glossary.stories';

export default {
  component: DashboardScreen,
  title: 'Pages/DashboardScreen',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <DashboardScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: StatsDefault.args.data,
  glossary: GlossaryDefault.args.definitions,
};

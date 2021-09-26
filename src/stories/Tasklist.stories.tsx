import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tasklist } from './Tasklist';

export default {
  title: 'Components/Tasklist',
  component: Tasklist,
} as ComponentMeta<typeof Tasklist>;

const Template: ComponentStory<typeof Tasklist> = ({ ...args }) => <Tasklist />;

export const Default = Template.bind({});
Default.args = {};

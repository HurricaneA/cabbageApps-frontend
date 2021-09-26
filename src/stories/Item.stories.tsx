import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Item } from './Item';

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {
    handleOpen: { action: 'Expanded' },
    handleClose: { action: 'Closed' },
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const Minimized = Template.bind({});
Minimized.args = {
  completed: false,
  label: 'Buy Eggs',
  date: '28th of June',
  expand: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  completed: true,
  label: 'Buy Eggs',
  date: '28th of June',
  expand: true,
  edit: false,
};

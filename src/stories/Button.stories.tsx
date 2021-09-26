import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning',
  variant: 'warning',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Dark',
  textColor: 'white',
  variant: 'dark',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  label: 'Small',
};

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CurrentLocation } from './CurrentLocation';

export default {
  title: 'CurrentLocation',
  component: CurrentLocation,
} as Meta;

const Template: Story = args => <CurrentLocation {...args} />;

export const Primary = Template.bind({});

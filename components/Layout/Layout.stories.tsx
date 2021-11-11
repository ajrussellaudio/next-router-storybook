import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Layout, LayoutProps } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = args => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is the Layout',
};

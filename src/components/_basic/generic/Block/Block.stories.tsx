import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Block } from './Block';

export default {
  title: 'Basic/BlockTitleAndBody',
  component: Block,
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (props) => <Block {...props} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Generic',
  children: 'Generic body',
};

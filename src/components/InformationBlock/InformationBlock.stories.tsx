import { ComponentStory } from '@storybook/react';

import { InformationBlock } from './InformationBlock';

export default {
  title: 'Basic/InformationBlock',
  component: InformationBlock,
  parameters: {
    docs: {
      description: {
        component: 'Text block to provide information',
      },
    },
  },
};

const Template: ComponentStory<typeof InformationBlock> = (props) => <InformationBlock {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: "You don't have any cards applications. You may check our Card products and Order a card online",
};

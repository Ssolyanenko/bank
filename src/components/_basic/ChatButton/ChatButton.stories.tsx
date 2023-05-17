import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChatButton } from './ChatButton';

export default {
  title: 'Basic/Buttons/ChatButton',
  component: ChatButton,
  parameters: {
    docs: {
      description: {
        component: 'Button to open support chat',
      },
    },
  },
} as ComponentMeta<typeof ChatButton>;

const Template: ComponentStory<typeof ChatButton> = (props) => <ChatButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  onClick(): void {
    alert('Click open chat button');
  },
};

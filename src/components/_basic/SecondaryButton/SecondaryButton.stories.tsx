import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SecondaryButton } from './SecondaryButton';

export default {
  title: 'Basic/Buttons/SecondaryButton',
  component: SecondaryButton,
  parameters: {
    docs: {
      description: {
        component: 'Button to confirm',
      },
    },
  },
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = (props) => <SecondaryButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  onClick(): void {
    alert('click');
  },
  children: 'Secondary Button',
};

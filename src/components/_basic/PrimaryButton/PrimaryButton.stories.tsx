import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PrimaryButton } from './PrimaryButton';

export default {
  title: 'Basic/Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: 'Button to confirm',
      },
    },
  },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (props) => <PrimaryButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  onClick(): void {
    alert('click');
  },
  children: 'Primary Button',
};

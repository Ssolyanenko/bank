import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BackButton } from './BackButton';

export default {
  title: 'Basic/Buttons/BackButton',
  component: BackButton,
  parameters: {
    docs: {
      description: {
        component: 'Return back when click button',
      },
    },
  },
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = (props) => <BackButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  handleBack(): void {
    alert('Click back button');
  },
  children: 'Back',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Basic/Buttons/BasicButton',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Basic button component for using in whole project',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />;

export const Default = Template.bind({});

Default.args = {
  name: 'button',
  children: "I'm a basic button",
  onClick(): void {
    alert('clicked');
  },
};

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StepperLabel } from './StepperLabel';

export default {
  title: 'Basic/Stepper/StepperLabel',
  component: StepperLabel,
  argTypes: {
    onClose: {
      open: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Label of step to change password',
      },
    },
  },
} as ComponentMeta<typeof StepperLabel>;

const Template: ComponentStory<typeof StepperLabel> = (props) => <StepperLabel {...props} />;

export const Default = Template.bind({});

Default.args = {
  isCompleted: true,
};

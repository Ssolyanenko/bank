import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RadioButtonsGroup } from './RadioButtonsGroup';

export default {
  title: 'Basic/Buttons/RadioButtonsGroup',
  component: RadioButtonsGroup,
  parameters: {
    docs: {
      description: {
        component: 'Radiobutton group сomponent',
      },
    },
  },
} as ComponentMeta<typeof RadioButtonsGroup>;

const Template: ComponentStory<typeof RadioButtonsGroup> = (props) => <RadioButtonsGroup {...props} />;

export const Default = Template.bind({});

Default.args = {
  radioGroupArray: [
    { id: 11, value: 'pensioner', label: 'Pensioner' },
    { id: 12, value: 'disabledPerson', label: 'Disabled person' },
    { id: 13, value: 'lookingForJob', label: 'Looking for a job' },
    { id: 14, value: 'suppByFamily', label: 'Supported by family' },
    { id: 15, value: 'others', label: 'Others' },
  ],
  name: 'radioGroup',
  defaultChecked: 'pensioner',
};

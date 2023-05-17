import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputPassword } from './InputPassword';

export default {
  title: 'Basic/Inputs/InputPassword',
  component: InputPassword,
  argTypes: {
    name: {
      type: 'string',
      defaultValue: 'name',
      description: 'Name of the password input field',
    },
    placeholder: {
      type: 'string',
      defaultValue: 'placeholder',
      description: 'Name of the password input field',
    },
    value: {
      type: 'string',
      defaultValue: 'value',
      description: 'Name of the password input field',
    },
    labelText: {
      type: 'string',
      defaultValue: 'label text',
      description: 'Name of the password input field',
    },
    isError: {
      type: 'boolean',
      defaultValue: false,
      description: 'Name of the password input field',
    },
    onChange: {
      action: 'change',
    },
    onBlur: {
      action: 'blur',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Basic password input',
      },
    },
  },
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (props) => <InputPassword {...props} />;

export const Default = Template.bind({});

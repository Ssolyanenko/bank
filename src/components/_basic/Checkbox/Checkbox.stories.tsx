import { ChangeEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Basic/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {
      defaultValue: false,
      type: 'boolean',
      description: 'Value of the Checkbox',
    },
    onChange: {
      action: 'ChangeValue',
      type: { name: 'function' },
      description: 'Function to change value of the checkbox',
    },
    name: {
      defaultValue: 'checkboxName',
      type: 'string',
      description: 'Name of the field',
    },
    children: {
      defaultValue: 'I am checkbox',
      type: 'string',
      description: 'The label text of checkbox',
    },
    classTitle: {
      defaultValue: '',
      type: 'string',
      description: 'Additional className',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Checkbox component with the label text inside it',
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ name, classTitle, children, onChange, value }) => {
  const [isChecked, setIsChecked] = useState(value);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>, isChecked: boolean): void => {
    setIsChecked(isChecked);
    onChange(event, isChecked);
  };

  return (
    <Checkbox
      name={name}
      value={isChecked}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => handleOnChange(event, event.target.checked)}
      classTitle={classTitle}
    >
      {children}
    </Checkbox>
  );
};

export const Default = Template.bind({});

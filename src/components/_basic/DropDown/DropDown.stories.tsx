import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DropDown } from './DropDown';

import classes from './DropDown.module.scss';

export default {
  title: 'Basic/DropDowns/BaseDropDown',
  component: DropDown,
  parameters: {
    docs: {
      description: {
        component: 'Сomponent for selecting a value from a drop-down list',
      },
    },
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (props) => {
  const [value, setValue] = useState('');

  return (
    <div className={classes.storybookWrapper}>
      <DropDown {...props} value={value} onChange={(event): void => setValue(event.target.value)} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  enumerations: [
    { id: 11, text: 'Work for hire' },
    { id: 12, text: 'Work for myself' },
    { id: 13, text: 'Unemployed' },
  ],
  name: 'dropDown',
  label: 'label',
  placeholder: 'placeholder',
};

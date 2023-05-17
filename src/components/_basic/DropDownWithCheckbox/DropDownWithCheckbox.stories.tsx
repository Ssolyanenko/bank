import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DropDownWithCheckbox } from './DropDownWithCheckbox';
import classes from './DropDownWithCheckbox.module.scss';

export default {
  title: 'Basic/DropDowns/DropDownWithCheckbox',
  component: DropDownWithCheckbox,
  parameters: {
    docs: {
      description: {
        component: 'Component for selecting a value from a drop-down list with checkboxes inside',
      },
    },
  },
} as ComponentMeta<typeof DropDownWithCheckbox>;

const Template: ComponentStory<typeof DropDownWithCheckbox> = (props) => (
  <div className={classes.storybookWrapper}>
    <DropDownWithCheckbox {...props} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  enumerations: [
    { id: 1, text: 'test 1' },
    { id: 2, text: 'test 2' },
    { id: 3, text: 'test 3' },
  ],
  name: 'dropDown',
  label: 'label',
  placeholder: 'placeholder',
};

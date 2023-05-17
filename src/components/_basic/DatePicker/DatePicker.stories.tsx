import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DatePicker } from 'components/_basic';

export default {
  title: 'Basic/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'Renders a date picker',
      },
    },
    layout: 'centered',
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (props) => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date('2023-01-05T14:19:04.936Z'));

  return <DatePicker {...props} setDate={(newDate: Date) => handleDateChange(newDate)} date={selectedDate} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Date value',
};

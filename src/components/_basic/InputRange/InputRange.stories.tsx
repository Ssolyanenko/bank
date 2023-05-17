import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputRange } from './InputRange';

export default {
  title: 'Basic/Inputs/InputRange',
  component: InputRange,
  parameters: {
    docs: {
      description: {
        component: 'Input dange to chose amount',
      },
    },
  },
} as ComponentMeta<typeof InputRange>;

const Template: ComponentStory<typeof InputRange> = (props) => {
  const [value, setValue] = useState<number[]>([0]);

  return (
    <div style={{ marginTop: '50px' }}>
      <InputRange {...props} count={value} handleChangeCount={(event: Event, newData: number[]) => setValue(newData)} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  count: [50, 4000],
  min: 0,
  max: 10000,
};

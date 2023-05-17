import { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Switcher } from './Switcher';

export default {
  title: 'Basic/Switcher',
  component: Switcher,
  parameters: {
    docs: {
      description: {
        component: 'Switcher for Forms',
      },
    },
  },
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = ({ isChecked }) => {
  const [isCheckedState, setIsCheckedState] = useState(isChecked);

  useEffect((): void => {
    setIsCheckedState(isChecked);
  }, [isChecked]);

  return <Switcher isChecked={isCheckedState} handleChange={(): void => setIsCheckedState(!isCheckedState)} />;
};

export const Default = Template.bind({});

Default.args = {
  isChecked: false,
};

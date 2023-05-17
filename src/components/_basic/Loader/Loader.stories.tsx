import { ReactElement } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from 'components/_basic';

export default {
  title: 'Basic/Loader',
  component: Loader,
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        component: 'Loader should circling until received data',
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (props): ReactElement => <Loader {...props} />;

export const Default = Template.bind({});

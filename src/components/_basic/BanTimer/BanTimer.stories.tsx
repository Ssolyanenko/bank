import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';

import { store } from 'store';
import { BanTimer } from './BanTimer';

export default {
  title: 'Basic/BanTimer',
  component: BanTimer,
  parameters: {
    docs: {
      description: {
        component: 'Timer of finishing ban',
      },
    },
  },
} as ComponentMeta<typeof BanTimer>;

const Template: ComponentStory<typeof BanTimer> = (props) => (
  <Provider store={store}>
    <BanTimer {...props} />
  </Provider>
);

export const Default = Template.bind({});

Default.args = {
  timeString: '30:00',
};

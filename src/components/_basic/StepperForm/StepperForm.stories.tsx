import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store';

import { StepperForm } from './StepperForm';

export default {
  title: 'Basic/Stepper/StepperForm',
  component: StepperForm,
  argTypes: {
    onClose: {
      open: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Step to change password',
      },
    },
  },
} as ComponentMeta<typeof StepperForm>;

const Template: ComponentStory<typeof StepperForm> = (props) => (
  <BrowserRouter>
    <Provider store={store}>
      <StepperForm {...props} />
    </Provider>
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {};

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Size } from 'interfaces/common/componentsSettings';
import { CloseButton } from './CloseButton';

export default {
  title: 'Basic/Buttons/CloseButton',
  component: CloseButton,
  parameters: {
    docs: {
      description: {
        component: 'Button to close modal window',
      },
    },
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (props) => <CloseButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  onClick(): void {
    alert('click');
  },
  size: Size.MEDIUM,
};

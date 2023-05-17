import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditButton } from './EditButton';

export default {
  title: 'Basic/Buttons/EditButton',
  component: EditButton,
  parameters: {
    docs: {
      description: {
        component: 'Edit button for Notifications form',
      },
    },
  },
} as ComponentMeta<typeof EditButton>;

const Template: ComponentStory<typeof EditButton> = (props) => <EditButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  onClick(): void {
    alert('click');
  },
};

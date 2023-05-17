import { ComponentStory } from '@storybook/react';

import { StatusTag } from 'components/StatusTag';

export default {
  title: 'Basic/StatusTag',
  component: StatusTag,
  argTypes: {
    status: { control: { type: 'radio' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tag to highlight card application current status',
      },
    },
  },
};

const Template: ComponentStory<typeof StatusTag> = (props) => <StatusTag {...props} />;

export const Default = Template.bind({});

Default.args = {
  status: 'Under consideration',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardStatementButtons } from 'components';

export default {
  title: 'Basic/Buttons/CardStatementButtons',
  component: CardStatementButtons,
  parameters: {
    docs: {
      description: {
        component: 'Group of buttons for CardStatement component',
      },
    },
    layout: 'centered',
  },
} as ComponentMeta<typeof CardStatementButtons>;

const Template: ComponentStory<typeof CardStatementButtons> = (props) => <CardStatementButtons {...props} />;

export const Default = Template.bind({});

Default.args = {
  valueFrom: new Date('2023-01-05T14:19:04.936Z'),
  valueTo: new Date('2023-01-07T14:19:04.936Z'),
};

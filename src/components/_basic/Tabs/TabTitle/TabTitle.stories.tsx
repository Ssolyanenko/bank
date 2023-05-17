import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TabTitle } from 'components/_basic';

export default {
  title: 'Basic/Tabs',
  component: TabTitle,
  argTypes: {
    title: {
      control: false,
    },
    index: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tabs for User Account',
      },
    },
  },
} as ComponentMeta<typeof TabTitle>;

const Template: ComponentStory<typeof TabTitle> = (props) => {
  const labels = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  return (
    <>
      {labels.map((label, index) => (
        <TabTitle
          key={index}
          {...props}
          index={index + 1}
          title={label}
          setSelectedTab={(): void => alert(`Selected ${label}`)}
        />
      ))}
    </>
  );
};

export const Default = Template.bind({});

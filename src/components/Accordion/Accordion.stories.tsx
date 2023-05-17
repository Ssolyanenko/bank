import React, { ReactElement } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Accordion } from 'components';
import { ListIcon } from 'assets';
import classes from './Accordion.module.scss';

export default {
  title: 'Basic/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'Accordion component allows you to present areas that are only visible once clicked',
      },
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (props): ReactElement => (
  <div className={classes.storybookWrapper}>
    <Accordion {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  accordionList: [
    {
      id: 'panel1',
      summary: {
        icon: <ListIcon />,
        title: 'Panel title 1',
      },
      content: <p>Panel content 1</p>,
    },
    {
      id: 'panel2',
      summary: {
        icon: <ListIcon />,
        title: 'Panel title 2',
      },
      content: <p>Panel content 2</p>,
    },
    {
      id: 'panel3',
      summary: {
        icon: <ListIcon />,
        title: 'Panel title 3',
      },
      content: <p>Panel content 3</p>,
    },
  ],
};

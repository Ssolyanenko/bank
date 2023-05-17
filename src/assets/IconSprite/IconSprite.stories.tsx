import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconSprite } from './IconSprite';

export default {
  title: 'Sprite/IconSprite',
  component: IconSprite,
} as ComponentMeta<typeof IconSprite>;

const Template: ComponentStory<typeof IconSprite> = () => <IconSprite />;

export const Default = Template.bind({});

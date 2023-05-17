import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ResponseModal } from 'components/ResponseModal';
import { PrimaryButton } from 'components/_basic';
import { ERROR_MESSAGE } from 'constants/errors';
import { ERROR, SUCCESS } from 'constants/text';

export default {
  title: 'Basic/Modals/ResponseModal',
  component: ResponseModal,
  argTypes: {
    isOpened: {
      defaultValue: false,
      type: 'boolean',
      description: 'Shows either the modal is open or closed',
    },
    content: {
      defaultValue: ERROR_MESSAGE.somethingWentWrong,
      type: 'string',
      description: 'Text of from back-end',
    },
    status: {
      defaultValue: ERROR,
      type: 'string',
      description: 'Status of the card order. It is either success or error',
      options: [ERROR, SUCCESS],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Modal component that demonstrates different responses to POST request. Those include either error message or success message. Path: components/ModalOrderCard',
      },
    },
  },
} as ComponentMeta<typeof ResponseModal>;

const Template: ComponentStory<typeof ResponseModal> = ({ content, status, isOpened }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpened);

  useEffect(() => {
    setIsModalOpen(isOpened);
  }, [isOpened]);

  return (
    <>
      <PrimaryButton onClick={(): void => setIsModalOpen(true)}>Open Modal</PrimaryButton>
      <ResponseModal
        isOpened={isModalOpen}
        modalCloseHandler={(): void => setIsModalOpen(false)}
        content={content}
        status={status}
      />
    </>
  );
};

export const Default = Template.bind({});

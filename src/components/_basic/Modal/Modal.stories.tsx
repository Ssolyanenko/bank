import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from 'components/_basic/Modal';

export default {
  title: 'Basic/Modals/BasicModal',
  component: Modal,
  argTypes: {
    handleClose: {
      action: 'CloseModal',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Basic modal component',
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={(): void => setIsOpen(true)}>Open</button>
      <Modal isOpen={isOpen} handleClose={(): void => setIsOpen(false)}>
        <div style={{ padding: '30px' }}>
          <h2>Modal Title</h2>
          <button style={{ margin: '0 auto', display: 'block' }} onClick={(): void => setIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

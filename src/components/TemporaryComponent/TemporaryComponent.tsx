import { FC, ReactElement, useState } from 'react';

import { Button } from 'components/_basic';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { TransferModal, ShareReceiptModal } from 'components';

export const TemporaryComponent: FC = (): ReactElement => {
  const isTransferSuccessful = true;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareReceiptOpen, setIsShareReceiptOpen] = useState(false);

  const handleClick = (): void => {
    setIsModalOpen(true);
  };

  const handleClose = (): void => {
    setIsModalOpen(false);
  };

  const handleClickShareModal = (): void => {
    setIsModalOpen(false);
    setIsShareReceiptOpen(true);
  };

  const handleCloseShareModal = (): void => setIsShareReceiptOpen(false);

  return (
    <>
      <Button className="" type={ButtonType.BUTTON} onClick={(): void => handleClick()}>
        Show modal
      </Button>
      <TransferModal
        isTransferSuccessful={isTransferSuccessful}
        isOpen={isModalOpen}
        handleClose={(): void => handleClose()}
        handleClickShareModal={(): void => handleClickShareModal()}
      />
      <ShareReceiptModal handleClose={(): void => handleCloseShareModal()} isOpen={isShareReceiptOpen} />
    </>
  );
};

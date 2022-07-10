import React, { useContext } from 'react';
import { ModalContext } from '../../../../store/modal-context';
import { AddingButton } from './style';

export const OpenModalButton = React.memo(() => {
  const { onClickOpenModal } = useContext(ModalContext);

  const openModal = () => {
    console.log(onClickOpenModal);
    onClickOpenModal();
  };

  return (
    <AddingButton onClick={openModal}>
      <div className="plusButton">+</div>
    </AddingButton>
  );
});

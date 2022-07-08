import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { OpenModalButton } from './OpenModalButton';

const initLocalData = () =>
  localStorage.getItem('runiary') ||
  localStorage.setItem('runiary', JSON.stringify([]));

export const AddRunItem = ({ appendRunItem }) => {
  initLocalData();
  const [openModal, setOpenModal] = useState(false);

  const onClickOpenModal = () => {
    setOpenModal(true);
  };

  const onClickCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        appendRunItem={appendRunItem}
        onClickCloseModal={onClickCloseModal}
        openModal={openModal}
      />
      <OpenModalButton onClickOpenModal={onClickOpenModal} />
    </>
  );
};

AddRunItem.propTypes = { appendRunItem: PropTypes.func.isRequired };

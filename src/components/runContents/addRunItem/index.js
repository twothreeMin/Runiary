import { useState } from 'react';
import PropTypes from 'prop-types';
import { RunItemFormModal } from './modal';
import { OpenModalButton } from './openModalButton/index';

const initLocalData = () => {
  return (
    localStorage.getItem('runiary') ||
    localStorage.setItem('runiary', JSON.stringify([]))
  );
};

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
      <RunItemFormModal
        appendRunItem={appendRunItem}
        onClickCloseModal={onClickCloseModal}
        openModal={openModal}
      />
      <OpenModalButton onClickOpenModal={onClickOpenModal} />
    </>
  );
};

AddRunItem.propTypes = { appendRunItem: PropTypes.func.isRequired };

import { useState } from 'react';
import PropTypes from 'prop-types';
import { RunItemFormModal } from './modal';
import { RunItemButton } from './runItemButton';

const initLocalData = () => {
  return (
    localStorage.getItem('runiary') ||
    localStorage.setItem('runiary', JSON.stringify([]))
  );
};

export const AddRunItem = ({ onAddingRunItem }) => {
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
        onAddingRunItem={onAddingRunItem}
        onClickCloseModal={onClickCloseModal}
        openModal={openModal}
      />
      <RunItemButton onClickOpenModal={onClickOpenModal} />
    </>
  );
};

AddRunItem.propTypes = { onAddingRunItem: PropTypes.func.isRequired };

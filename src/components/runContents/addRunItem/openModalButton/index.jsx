import React from 'react';

import PropTypes from 'prop-types';
import { AddingButton } from './style';

export const OpenModalButton = React.memo(({ onClickOpenModal }) => {
  const openModal = () => {
    onClickOpenModal();
  };

  return (
    <AddingButton onClick={openModal}>
      <div className="plusButton">+</div>
    </AddingButton>
  );
});

OpenModalButton.propTypes = { onClickOpenModal: PropTypes.func.isRequired };

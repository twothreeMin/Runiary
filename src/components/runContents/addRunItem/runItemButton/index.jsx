import React from 'react';

import PropTypes from 'prop-types';
import { AddingButton } from './style';

export const RunItemButton = React.memo(({ onClickOpenModal }) => {
  const openModal = () => {
    onClickOpenModal();
  };

  return (
    <AddingButton onClick={openModal}>
      <div className="plusButton">+</div>
    </AddingButton>
  );
});

RunItemButton.propTypes = { onClickOpenModal: PropTypes.func.isRequired };

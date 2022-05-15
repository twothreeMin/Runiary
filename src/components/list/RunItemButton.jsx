import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { RunItemButtonStyle } from './RunItemButton.styles';

export const RunItemButton = ({ onClickOpenModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const handlerClick = () => {
    setOpenModal(!openModal);
    onClickOpenModal(openModal);
  };

  return (
    <RunItemButtonStyle onClick={handlerClick}>
      <div className="plusButton">+</div>
    </RunItemButtonStyle>
  );
};

RunItemButton.propTypes = { onClickOpenModal: PropTypes.func.isRequired };

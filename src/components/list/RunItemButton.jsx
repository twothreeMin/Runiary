import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './RunItemButton.css';

export const RunItemButton = ({ onClickOpenModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const handlerClick = () => {
    setOpenModal(!openModal);
    onClickOpenModal(openModal);
  };

  const handlerKeyUp = () => {
    console.log('keyup!!');
  };

  return (
    <div
      role="button"
      className="runItemButton"
      onClick={handlerClick}
      onKeyUp={handlerKeyUp}
      tabIndex={0}
    >
      <div className="plusButton">+</div>
    </div>
  );
};
RunItemButton.propTypes = { onClickOpenModal: PropTypes.func.isRequired };

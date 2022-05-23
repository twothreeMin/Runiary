import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { RunItemForm } from './RunItemForm';

const ModalStyled = styled.div`
  & {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }

  & button {
    outline: none;
    cursor: pointer;
    border: 0;
  }

  &.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
`;

export const Modal = ({ onCreate, onClickCloseModal, openModal }) => {
  console.log(openModal);
  return (
    <ModalStyled className={openModal && 'openModal'}>
      <RunItemForm onCreate={onCreate} onClickCloseModal={onClickCloseModal} />
    </ModalStyled>
  );
};

Modal.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

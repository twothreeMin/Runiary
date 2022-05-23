import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const RunItemButtonStyled = styled.button`
  & {
    margin: 15px 0px;
    text-align: center;
    border: 1px dashed #a3ffee;
    background: #ffffff;

    width: 100%;
  }

  .plusButton {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 20px 0px;

    color: #89f7e2;
    font-size: 44px;
  }

  &:hover {
    border: 1px solid #89f7e2;
    background: #a1ffec;
    box-shadow: -3px -3px #abffee;
  }

  &:hover .plusButton {
    color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    .plusButton {
      margin: 10px 0px;
      width: 30px;
      height: 30px;

      font-size: 22px;
    }
  }
`;

export const RunItemButton = ({ onClickOpenModal }) => {
  const handlerClick = () => {
    onClickOpenModal();
  };

  return (
    <RunItemButtonStyled onClick={handlerClick}>
      <div className="plusButton">+</div>
    </RunItemButtonStyled>
  );
};

RunItemButton.propTypes = { onClickOpenModal: PropTypes.func.isRequired };

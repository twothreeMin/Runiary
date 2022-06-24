import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  padding: 0.5rem;
  margin-left: 50px;
`;

export const CloseMenuButton = ({ onCloseSideMenu }) => {
  return <CloseButton onClick={onCloseSideMenu}>&times;</CloseButton>;
};

CloseMenuButton.propTypes = { onCloseSideMenu: PropTypes.func.isRequired };

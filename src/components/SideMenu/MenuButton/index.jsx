import { PropTypes } from 'prop-types';
import { MenuBtn } from './style';

export const MenuButton = ({ onOpenSideMenu }) => {
  const openSideMenu = () => {
    onOpenSideMenu();
  };
  return <MenuBtn onClick={openSideMenu}>&#9776;</MenuBtn>;
};

MenuButton.propTypes = { onOpenSideMenu: PropTypes.func.isRequired };

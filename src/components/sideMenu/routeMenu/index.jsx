import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { SubMenu } from './style';
import { CloseMenuButton } from './closeMenuButton';

export const RouteMenu = ({ openSideMenu, onCloseSideMenu }) => {
  return (
    <SubMenu openSideMenu={openSideMenu}>
      <CloseMenuButton onCloseSideMenu={onCloseSideMenu} />
      <Link to="/">HOME</Link>
      <br />
      <Link to="/rank">Rank</Link>
    </SubMenu>
  );
};

RouteMenu.propTypes = {
  openSideMenu: PropTypes.bool.isRequired,
  onCloseSideMenu: PropTypes.func.isRequired,
};

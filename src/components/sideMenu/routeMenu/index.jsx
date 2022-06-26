import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { RiHome4Line, RiTrophyLine } from 'react-icons/ri';
import { SubMenu } from './style';
import { CloseMenuButton } from './closeMenuButton';

export const RouteMenu = ({ openSideMenu, onCloseSideMenu }) => {
  return (
    <SubMenu openSideMenu={openSideMenu}>
      <CloseMenuButton onCloseSideMenu={onCloseSideMenu} />
      <Link to="/">
        <RiHome4Line />
        Home
      </Link>
      <Link to="/rank">
        <RiTrophyLine />
        Rank
      </Link>
    </SubMenu>
  );
};

RouteMenu.propTypes = {
  openSideMenu: PropTypes.bool.isRequired,
  onCloseSideMenu: PropTypes.func.isRequired,
};

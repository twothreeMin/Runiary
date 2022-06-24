import ReactDOM from 'react-dom';
import { useState } from 'react';
import { RouteMenu } from './routeMenu/index';
import { MenuButton } from './menuButton/index';

export const SideMenu = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const onOpenSideMenu = () => {
    setOpenSideMenu(true);
  };

  const onCloseSideMenu = () => {
    setOpenSideMenu(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <MenuButton onOpenSideMenu={onOpenSideMenu} />
          <RouteMenu
            openSideMenu={openSideMenu}
            onCloseSideMenu={onCloseSideMenu}
          />
        </>,
        document.getElementById('sideNav'),
      )}
    </>
  );
};

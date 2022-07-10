import ReactDOM from 'react-dom';
import React, { createContext, useContext, useState } from 'react';
import { RouteMenu } from './RouteMenu/index';
import { MenuButton } from './MenuButton/index';

const SideMenuContext = createContext('defaultValue');

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

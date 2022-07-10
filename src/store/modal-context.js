import React, { useState } from 'react';

export const ModalContext = React.createContext({
  openModal: false,
  onClickOpenModal: () => {},
  onClickCloseModa: () => {},
});

export const ModalContextProvider = ({ ...props }) => {
  const [openModal, setOpenModal] = useState(false);

  const onClickOpenModal = () => {
    setOpenModal(true);
  };

  const onClickCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        openModal,
        onClickOpenModal,
        onClickCloseModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

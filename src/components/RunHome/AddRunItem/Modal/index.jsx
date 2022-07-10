import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { UserForm } from './UserForm';
import { PopupModal } from './style';
import { ModalContext } from '../../../../store/modal-context';

export const Modal = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      {ReactDOM.createPortal(
        <PopupModal className={openModal && 'openModal'}>
          <UserForm />
        </PopupModal>,
        document.getElementById('modal-root'),
      )}
    </>
  );
};

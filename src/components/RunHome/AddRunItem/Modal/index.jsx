import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { UserForm } from './UserForm';
import { PopupModal } from './style';

export const Modal = ({ appendRunItem, onClickCloseModal, openModal }) => (
  <>
    {ReactDOM.createPortal(
      <PopupModal className={openModal && 'openModal'}>
        <UserForm
          appendRunItem={appendRunItem}
          onClickCloseModal={onClickCloseModal}
        />
      </PopupModal>,
      document.getElementById('modal-root'),
    )}
  </>
);

Modal.propTypes = {
  appendRunItem: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

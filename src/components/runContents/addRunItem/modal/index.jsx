import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { RunItemForm } from './runItemForm';
import { Modal } from './style';

export const RunItemFormModal = ({
  appendRunItem,
  onClickCloseModal,
  openModal,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal className={openModal && 'openModal'}>
          <RunItemForm
            appendRunItem={appendRunItem}
            onClickCloseModal={onClickCloseModal}
          />
        </Modal>,
        document.getElementById('modal-root'),
      )}
    </>
  );
};

RunItemFormModal.propTypes = {
  appendRunItem: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

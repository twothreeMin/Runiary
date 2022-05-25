import PropTypes from 'prop-types';

import { RunItemForm } from './RunItemForm';
import { Modal } from './style';

export const RunItemFormModal = ({
  onCreate,
  onClickCloseModal,
  openModal,
}) => {
  return (
    <Modal className={openModal && 'openModal'}>
      <RunItemForm onCreate={onCreate} onClickCloseModal={onClickCloseModal} />
    </Modal>
  );
};

RunItemFormModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

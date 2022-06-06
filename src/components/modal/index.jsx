import PropTypes from 'prop-types';

import { RunItemForm } from './runItemForm';
import { Modal } from './style';

export const RunItemFormModal = ({
  onAddingRunItem,
  onClickCloseModal,
  openModal,
}) => {
  return (
    <Modal className={openModal && 'openModal'}>
      <RunItemForm
        onAddingRunItem={onAddingRunItem}
        onClickCloseModal={onClickCloseModal}
      />
    </Modal>
  );
};

RunItemFormModal.propTypes = {
  onAddingRunItem: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

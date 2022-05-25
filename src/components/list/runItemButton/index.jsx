import PropTypes from 'prop-types';
import { AddingButton } from './style';

export const RunItemButton = ({ onClickOpenModal }) => {
  const openModal = () => {
    onClickOpenModal();
  };

  return (
    <AddingButton onClick={openModal}>
      <div className="plusButton">+</div>
    </AddingButton>
  );
};

RunItemButton.propTypes = { onClickOpenModal: PropTypes.func.isRequired };

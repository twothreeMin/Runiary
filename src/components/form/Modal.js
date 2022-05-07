import PropTypes from 'prop-types';
import { RuniaryForm } from './RuniaryForm';

export const Modal = ({ onCreate, openModal }) => {
  const saveRuniaryDataHandler = (enteredRuniaryData) => {
    const runiaryData = {
      ...enteredRuniaryData,
      id: Math.random().toString(),
    };

    onCreate(runiaryData);
  };

  return (
    <div className={openModal ? 'modal openModal' : 'modal'}>
      {openModal ? (
        <RuniaryForm onSaveRuniaryData={saveRuniaryDataHandler} />
      ) : null}
    </div>
  );
};

Modal.propTypes = {
  onCreate: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

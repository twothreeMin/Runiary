import PropTypes from 'prop-types';
import { RuniaryForm } from './RuniaryForm';

export const NewRuniary = ({ onCreate }) => {
  const saveRuniaryDataHandler = (enteredRuniaryData) => {
    const runiaryData = {
      ...enteredRuniaryData,
      id: Math.random().toString(),
    };

    onCreate(runiaryData);
  };

  return (
    <div className="RuniaryForm">
      <RuniaryForm onSaveRuniaryData={saveRuniaryDataHandler} />
    </div>
  );
};

NewRuniary.propTypes = { onCreate: PropTypes.func.isRequired };

import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { TextInput } from 'grommet';
import { Button } from '../../../../ui/button';
import { RuniaryInputForm } from './style';

export const RunItemForm = ({ onAddingRunItem, onClickCloseModal }) => {
  const runDistanceInput = useRef();
  const runTimeInput = useRef();
  const runFeelingInput = useRef();
  const [runCondition, setRunCondition] = useState('');
  const runConditionInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const regex = /\d{2}:\d{2}:\d{2}/;

    if (!regex.test(runTimeInput.current.value)) {
      runTimeInput.current.style.borderColor = 'red';
      runTimeInput.current.value = '00:00:00';
      return;
    }

    const runiaryData = {
      distance: runDistanceInput.current.value,
      time: runTimeInput.current.value,
      feeling: runFeelingInput.current.value,
      condition: runConditionInput.current.value,
    };

    onAddingRunItem(runiaryData);
    onClickCloseModal();
  };

  const selectCondition = (e) => {
    setRunCondition(e.target.value);
  };

  const closeModal = () => {
    onClickCloseModal();
  };

  return (
    <RuniaryInputForm onSubmit={submitHandler}>
      <div className="RunDiaryForm__condition">
        <label htmlFor="condition">Today Condition</label>
        <select value={runCondition} onChange={selectCondition}>
          <option value="No running"> No running</option>
          <option value="😆"> 😆 </option>
          <option value="😀"> 😀 </option>
          <option value="🙂"> 🙂 </option>
          <option value="😨 "> 😨 </option>
          <option value="🥵"> 🥵 </option>
        </select>
      </div>
      <div className="RunDiaryForm__run-distance">
        <label htmlFor="run-distance">Distance</label>
        <TextInput
          type="text"
          ref={runDistanceInput}
          placeholder={runCondition === 'No running' ? false : 'Ex) 3km'}
          disabled={runCondition === 'No running'}
        />
      </div>
      <div className="RunDiaryForm__run-time">
        <label htmlFor="run-time">Time</label>
        <TextInput type="text" ref={runTimeInput} />
        <span>:</span>
        <TextInput type="text" />
        <span>:</span>
        <TextInput type="text" />
      </div>
      <div className="RunDiaryForm__run-feeling">
        <label htmlFor="run-feeling">How are you feeling today?</label>
        <textarea name="feeling" cols="30" rows="10" ref={runFeelingInput} />
      </div>
      <Button type="submit">등록</Button>
      <Button type="button" onClick={closeModal}>
        닫기
      </Button>
    </RuniaryInputForm>
  );
};

RunItemForm.propTypes = {
  onAddingRunItem: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

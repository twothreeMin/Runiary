import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import { Button } from '../../ui/button';
import { RuniaryInputForm } from './style';

export const RunItemForm = ({ onCreate, onClickCloseModal }) => {
  const runDistanceInput = useRef();
  const runTimeInput = useRef();
  const runFeelingInput = useRef();
  const runConditionInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const regex = /\d{2}:\d{2}:\d{2}/;

    if (!regex.test(runTimeInput.current.value)) {
      // eslint-disable-next-line no-alert
      alert('time form 양식에 어긋납니다.');
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

    onCreate(runiaryData);
    runDistanceInput.current.value = '';
    runTimeInput.current.value = '00:00:00';
    runFeelingInput.current.value = '';
    runConditionInput.current.value = '1';
    onClickCloseModal();
  };

  const onClickHandler = () => {
    onClickCloseModal();
  };

  return (
    <RuniaryInputForm onSubmit={submitHandler}>
      <div className="RunDiaryForm__condition">
        <label htmlFor="condition">Today Condition</label>
        <select id="condition" ref={runConditionInput}>
          <option value="No running"> No running </option>
          <option value="😆"> 😆 </option>
          <option value="😀"> 😀 </option>
          <option value="🙂"> 🙂 </option>
          <option value="😨 "> 😨 </option>
          <option value="🥵"> 🥵 </option>
        </select>
      </div>
      <div className="RunDiaryForm__run-distance">
        <label htmlFor="run-distance">Distance</label>
        <input type="text" placeholder="Ex) 3" ref={runDistanceInput} />
      </div>
      <div className="RunDiaryForm__run-time">
        <label htmlFor="run-time">Time</label>
        <input type="text" ref={runTimeInput} placeholder="Ex) 00:15:30" />
      </div>
      <div className="RunDiaryForm__run-feeling">
        <label htmlFor="run-feeling">How are you feeling today?</label>
        <textarea name="feeling" cols="30" rows="10" ref={runFeelingInput} />
      </div>
      <Button type="submit">등록</Button>
      <Button type="button" onClick={onClickHandler}>
        닫기
      </Button>
    </RuniaryInputForm>
  );
};

RunItemForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

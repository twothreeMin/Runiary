import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const RuniaryForm = ({ onSaveRuniaryData }) => {
  const [enteredDistance, setEnteredDistance] = useState('');
  const [enteredTime, setEnteredTime] = useState('');
  const [enteredFeeling, setEnteredFeeling] = useState('');
  const [enteredCondition, setEnteredCondition] = useState('');

  const distanceChangeHandler = (e) => {
    setEnteredDistance(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setEnteredTime(e.target.value);
  };

  const feelingChangeHandler = (e) => {
    setEnteredFeeling(e.target.value);
  };

  const conditionChangeHandler = (e) => {
    setEnteredCondition(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const runiaryData = {
      distance: enteredDistance,
      time: enteredTime,
      feeling: enteredFeeling,
      condition: enteredCondition,
    };

    onSaveRuniaryData(runiaryData);
    setEnteredDistance('');
    setEnteredTime('');
    setEnteredFeeling('');
    setEnteredCondition('1');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="RunDiaryForm__condition">
        <label htmlFor="condition">Today Condition</label>
        <select
          id="condition"
          value={enteredCondition}
          onChange={conditionChangeHandler}
        >
          <option value="0"> No running </option>
          <option value="1"> 😆 </option>
          <option value="2"> 😀 </option>
          <option value="3"> 🙂 </option>
          <option value="4"> 😨 </option>
          <option value="5"> 🥵 </option>
        </select>
      </div>
      <div className="RunDiaryForm__run-distance">
        <label htmlFor="run-distance">Distance</label>
        <input
          type="text"
          placeholder="Ex) 3"
          value={enteredDistance}
          onChange={distanceChangeHandler}
        />
      </div>
      <div className="RunDiaryForm__run-time">
        <label htmlFor="run-time">Time</label>
        <input
          type="text"
          placeholder="Ex) 00:15:30"
          value={enteredTime}
          onChange={timeChangeHandler}
        />
      </div>
      <div className="RunDiaryForm__run-feeling">
        <label htmlFor="run-feeling">How are you feeling today?</label>
        <textarea
          name="feeling"
          cols="30"
          rows="10"
          value={enteredFeeling}
          onChange={feelingChangeHandler}
        />
      </div>
      <button type="submit">등록</button>
    </form>
  );
};

RuniaryForm.propTypes = { onSaveRuniaryData: PropTypes.func.isRequired };

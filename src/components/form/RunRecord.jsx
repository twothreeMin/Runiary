import React, { useState } from 'react';

const RunRecord = () => {
  const [enteredDistance, setEnteredDistance] = useState('');
  const [enteredTime, setEnteredTime] = useState('');
  const [enteredFeeling, setEnteredFeeling] = useState('');

  const distanceChangeHandler = (e) => {
    setEnteredDistance(e.target.value);
  };

  const timeChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredTime(e.target.value);
  };

  const feelingChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredFeeling(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const runInfo = {
      distance: enteredDistance,
      time: enteredTime,
      feeling: enteredFeeling,
    };

    console.log(runInfo);

    setEnteredDistance('');
    setEnteredTime('');
    setEnteredFeeling('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="RunDiaryForm__condition">
        <label htmlFor="condition">Today Condition</label>
        <select id="condition">
          <option> 😆 </option>
          <option> 😀 </option>
          <option> 🙂 </option>
          <option> 😨 </option>
          <option> 🥵 </option>
          <option> No running </option>
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

export { RunRecord };

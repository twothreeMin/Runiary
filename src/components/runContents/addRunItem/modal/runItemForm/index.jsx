import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Select, TextInput, TextArea } from 'grommet';
import { Button } from '../../../../ui/button';
import { RuniaryForm } from './style';

import { conditions, initInputValues } from './values';
import { getPace } from './utils';

export const RunItemForm = ({ appendRunItem, onClickCloseModal }) => {
  const [inputStates, setInputStates] = useState(initInputValues);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputStates({ ...inputStates, [name]: value });
  };

  const closeModal = () => {
    onClickCloseModal();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const runiaryData = {
      condition: inputStates.condition,
      distance: inputStates.distance,
      runTime: {
        hour: inputStates.hour,
        min: inputStates.min,
        sec: inputStates.sec,
      },
      anything: inputStates.anything,
      date: new Date().toLocaleDateString('ko-KR'),
      pace: getPace(
        inputStates.hour,
        inputStates.min,
        inputStates.sec,
        inputStates.distance,
      ),
      id: Math.random().toString(),
    };

    appendRunItem(runiaryData);
    onClickCloseModal();
  };

  return (
    <RuniaryForm onSubmit={submitHandler}>
      <div className="runiaryForm">
        <label htmlFor="runCondition">컨디션</label>
        <div className="runCondition inputForm">
          <Select
            name="condition"
            options={conditions}
            value={inputStates.condition}
            onChange={inputChange}
          />
        </div>
        <label htmlFor="runDistance">거리(km)</label>
        <div className="runDistance inputForm">
          <TextInput
            id="distanceForm"
            name="distance"
            type="text"
            value={inputStates.distance}
            onChange={inputChange}
            placeholder={
              inputStates.condition === 'No running' ? 'No running' : 'Ex) 3km'
            }
            disabled={inputStates.condition === 'No running'}
          />
        </div>
        <label htmlFor="runTime">시간</label>
        <div className="runTime">
          {inputStates.condition === 'No running' ? (
            <TextInput
              id="timeForm"
              name="time"
              type="text"
              onChange={inputChange}
              placeholder={
                inputStates.condition === 'No running'
                  ? 'No running'
                  : 'Ex) 3km'
              }
              disabled={inputStates.condition === 'No running'}
            />
          ) : (
            <>
              <TextInput
                id="timeForm"
                name="hour"
                type="text"
                value={inputStates.hour}
                onChange={inputChange}
              />
              <span>:</span>
              <TextInput
                id="timeForm"
                name="min"
                type="text"
                value={inputStates.min}
                onChange={inputChange}
              />
              <span>:</span>
              <TextInput
                id="timeForm"
                name="sec"
                type="text"
                value={inputStates.sec}
                onChange={inputChange}
              />
            </>
          )}
        </div>
        <label htmlFor="runAnything">기타</label>
        <div className="runAnything inputForm">
          <TextArea
            id="anythingForm"
            name="anything"
            value={inputStates.anything}
            onChange={inputChange}
            disabled={inputStates.condition === 'No running'}
            placeholder={
              inputStates.condition === 'No running'
                ? 'No running'
                : 'Ex) 오늘 저녁..'
            }
          />
        </div>
        <div className="buttons">
          <Button type="submit">등록</Button>
          <Button type="button" onClick={closeModal}>
            닫기
          </Button>
        </div>
      </div>
    </RuniaryForm>
  );
};

RunItemForm.propTypes = {
  appendRunItem: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

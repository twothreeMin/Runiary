import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { FormField, Select, TextInput, TextArea } from 'grommet';
import { Button } from '../../../../ui/button';
import { RuniaryInputForm } from './style';

const conditions = ['No running', '😆', '😀', '🙂', '😨', '🥵'];

export const RunItemForm = ({ appendRunItem, onClickCloseModal }) => {
  const runDistance = useRef('');
  const runTimeHour = useRef('00');
  const runTimeMinutes = useRef('00');
  const runTimeSeconds = useRef('00');
  const runFeel = useRef('');
  const [runCondition, setRunCondition] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // const regex = /\d{2}:\d{2}:\d{2}/;

    // if (!regex.test(runTimeInput.current.value)) {
    //   runTimeInput.current.style.borderColor = 'red';
    //   runTimeInput.current.value = '00:00:00';
    //   return;
    // }

    const runiaryData = {
      distance: runDistance.current.value,
      runTime: {
        hour: runTimeHour.current.value,
        min: runTimeMinutes.current.value,
        sec: runTimeSeconds.current.value,
      },
      feel: runFeel.current.value,
      condition: runCondition,
    };

    appendRunItem(runiaryData);
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
      <div className="runiaryForm">
        <FormField label="Today Condition">
          <Select
            options={conditions}
            value={runCondition}
            onChange={selectCondition}
          />
        </FormField>
        <FormField label="Distance">
          <TextInput
            type="text"
            ref={runDistance}
            placeholder={
              runCondition === 'No running' ? 'No running' : 'Ex) 3km'
            }
            disabled={runCondition === 'No running'}
          />
        </FormField>
        <FormField label="RunTime">
          {runCondition === 'No running' ? (
            <TextInput
              type="text"
              placeholder={
                runCondition === 'No running' ? 'No running' : 'Ex) 3km'
              }
              disabled={runCondition === 'No running'}
            />
          ) : (
            <div className="runTime">
              <TextInput type="text" ref={runTimeHour} />
              <span>:</span>
              <TextInput type="text" ref={runTimeMinutes} />
              <span>:</span>
              <TextInput type="text" ref={runTimeSeconds} />
            </div>
          )}
        </FormField>
        <FormField label="And So on">
          <TextArea
            name="feeling"
            ref={runFeel}
            disabled={runCondition === 'No running'}
            placeholder={
              runCondition === 'No running' ? 'No running' : 'Ex) 오늘 저녁..'
            }
          />
        </FormField>
        <div className="buttons">
          <Button type="submit">등록</Button>
          <Button type="button" onClick={closeModal}>
            닫기
          </Button>
        </div>
      </div>
    </RuniaryInputForm>
  );
};

RunItemForm.propTypes = {
  appendRunItem: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

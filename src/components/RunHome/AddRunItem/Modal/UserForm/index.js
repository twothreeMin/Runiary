import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from '../../../../UI/Button';
import { GuideSpan, RuniaryForm } from './style';

import { conditions } from './values';
import { getPace } from './utils';
import { Select } from './components/Select';
import { Input } from './components/Input';
import { TextArea } from './components/TextArea';

export const UserForm = ({ appendRunItem, onClickCloseModal }) => {
  const [formValues, setFormValues] = useState({
    condition: 'No running',
    distance: '',
    hour: '',
    min: '',
    sec: '',
    anything: '',
  });
  const [inputValid, setInputValid] = useState(false);

  console.log(formValues);

  const getInputValue = (obj) => {
    const key = Object.keys(obj);
    setFormValues({ ...formValues, [key]: obj[key] });
  };

  const getInputValid = (valid) => {
    setInputValid(valid);
  };

  const closeModal = () => {
    onClickCloseModal();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const runiaryData = {
      condition: formValues.condition,
      distance: formValues.distance,
      runTime: {
        hour: formValues.hour,
        min: formValues.min,
        sec: formValues.sec,
      },
      anything: formValues.anything,
      date: new Date().toLocaleDateString('ko-KR'),
      pace: getPace(
        formValues.hour,
        formValues.min,
        formValues.sec,
        formValues.distance,
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
            getInputValue={getInputValue}
          />
        </div>
        {formValues.condition === 'No running' ? (
          ''
        ) : (
          <>
            <label htmlFor="runDistance">거리(km)</label>
            <div className="runDistance inputForm">
              <Input
                name="distance"
                getInputValue={getInputValue}
                getInputValid={getInputValid}
              />
            </div>
            <label htmlFor="runTime">시간</label>
            <div className="runTime">
              <Input
                name="hour"
                getInputValue={getInputValue}
                getInputValid={getInputValid}
              />
              <span>:</span>
              <Input
                name="min"
                getInputValue={getInputValue}
                getInputValid={getInputValid}
              />
              <span>:</span>
              <Input
                name="sec"
                getInputValue={getInputValue}
                getInputValid={getInputValid}
              />
            </div>
            <label htmlFor="runAnything">기타</label>
            <div className="runAnything inputForm">
              <TextArea name="anything" getInputValue={getInputValue} />
            </div>
          </>
        )}
        <GuideSpan valid={inputValid}>
          거리 또는 시간 폼에 문자열이 감지되었습니다.
        </GuideSpan>
        <div className="buttons">
          <Button type="submit" valid={inputValid}>
            등록
          </Button>
          <Button type="button" onClick={closeModal}>
            닫기
          </Button>
        </div>
      </div>
    </RuniaryForm>
  );
};

UserForm.propTypes = {
  appendRunItem: PropTypes.func.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

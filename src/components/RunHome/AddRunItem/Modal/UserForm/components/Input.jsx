import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const validateString = (inputValue) => /[a-zA-Z]/g.test(inputValue);

const InputField = styled.input`
  background: ${(props) => (props.valid ? 'red' : 'white')};
`;

export const Input = ({ ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const [valid, setValid] = useState(false);

  console.log(inputValue);

  useEffect(() => {
    const validResult = validateString(inputValue);
    setValid(validResult);
    props.getInputValid(validResult);
  }, [inputValue]);

  return (
    <InputField
      value={inputValue}
      valid={valid}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      onBlur={() => {
        props.getInputValue({ [props.name]: inputValue });
      }}
    />
  );
};

Input.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  getInputValid: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

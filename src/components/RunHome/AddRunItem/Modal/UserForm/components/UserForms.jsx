import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

const Input = ({ ...props }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <input
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      onBlur={() => {
        props.getInputValue({ [props.name]: inputValue });
      }}
    />
  );
};

const Select = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState(options[0].name);

  useEffect(() => {
    props.getInputValue({ [props.name]: selectValue });
  }, [selectValue]);

  return (
    <select
      value={selectValue}
      onChange={(e) => {
        setSelectValue(e.target.value);
      }}
    >
      {options.map((option) => {
        return (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

const TextArea = ({ ...props }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  return (
    <textarea
      value={textAreaValue}
      onChange={(e) => {
        setTextAreaValue(e.target.value);
      }}
      onBlur={() => {
        props.getInputValue({ [props.name]: textAreaValue });
      }}
    />
  );
};

Input.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getInputValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

TextArea.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export { Input, Select, TextArea };

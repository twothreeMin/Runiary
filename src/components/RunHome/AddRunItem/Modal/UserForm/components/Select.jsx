import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export const Select = ({ options, ...props }) => {
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
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
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

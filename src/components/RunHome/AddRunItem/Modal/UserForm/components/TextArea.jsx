import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const TextArea = ({ ...props }) => {
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

TextArea.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

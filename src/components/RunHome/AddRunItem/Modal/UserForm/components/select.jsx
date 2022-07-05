import { PropTypes } from 'prop-types';

export const Select = ({ options }) => {
  return (
    <select>
      {options.map((option) => {
        return <option value={option.value}>{option.value}</option>;
      })}
    </select>
  );
};

Select.propTypes = { options: PropTypes.arrayOf(PropTypes.string).isRequired };

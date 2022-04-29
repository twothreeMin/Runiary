import PropTypes from 'prop-types';

import './RunItemButton.css';

export const RunItemButton = ({ date, distance }) => {
  const handlerClick = () => {
    console.log('click!!');
  };

  const handlerKeyUp = () => {
    console.log('keyup!!');
  };

  return (
    <div
      role="button"
      className="runItemButton"
      onClick={handlerClick}
      onKeyUp={handlerKeyUp}
      tabIndex={0}
    >
      <div className="plusButton">+</div>
      <div className="test">{date}</div>
      <div className="test2">{distance}</div>
    </div>
  );
};

RunItemButton.propTypes = {
  date: PropTypes.number.isRequired,
  distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

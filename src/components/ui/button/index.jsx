import PropTypes from 'prop-types';

import { SimpleButton } from './style';

export const Button = ({ type, ...props }) => {
  return (
    <SimpleButton type={type || 'button'} onClick={props.onClick}>
      {props.children}
    </SimpleButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = { onClick: () => {} };

import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SimpleButton = styled.button`
  background: #abffee;
  margin: 0.3rem;
`;

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

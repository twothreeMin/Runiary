import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SimpleButton = styled.button`
  background: #abffee;
  margin: 0.3rem;
  padding: 10px 30px;
`;

export const Button = ({ type, ...props }) => (
  <SimpleButton
    type={type || 'button'}
    onClick={props.onClick}
    disabled={props.valid ? 'disabled' : ''}
  >
    {props.children}
  </SimpleButton>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  valid: PropTypes.bool,
};

Button.defaultProps = { onClick: () => {}, valid: false };

import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: #abffee;
  margin: 0.3rem;
`;

export const Button = ({ type, ...props }) => {
  return (
    <ButtonStyled type={type || 'button'} onClick={props.onClick}>
      {props.children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = { onClick: () => {} };

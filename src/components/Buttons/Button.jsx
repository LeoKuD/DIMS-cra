import PropTypes from 'prop-types';

export const Button = ({ children, onClick, ...restProps }) => {
  return (
    <button type='button' onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
Button.defaultProps = {};

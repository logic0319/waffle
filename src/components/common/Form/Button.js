import React from 'react';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';

const Button = props => (
  <button className={`${styles['button-wrap']} ${props.classNames['button-wrap']}`}>
    <span className={`${styles['button-txt']} ${props.classNames['button-txt']}`}>{props.text}</span>
  </button>
);

Button.defaultProps = {
  classNames: { 'button-wrap': [], 'button-txt': [] },
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  classNames: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
};
export default Button;

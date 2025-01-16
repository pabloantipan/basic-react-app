// import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ label, type = 'text', id, value, onChange, error }) => (
  <div className={styles.inputContainer}>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} value={value} onChange={onChange} className={error ? styles.error : ''} />
    {error && <span className={styles.errorMessage}>{error}</span>}
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
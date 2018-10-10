import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  text, type, id, value, handleChange,
}) => (
  <div className="form-group">
    <input
      placeholder={text}
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);
Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;

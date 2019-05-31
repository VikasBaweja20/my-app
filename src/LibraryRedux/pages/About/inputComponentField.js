import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label htmlFor={field.name} {...props}>
      {label}
      <input type="text" {...field} {...props} />
    </label>

    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

InputComponent.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
};

InputComponent.defaultProps = {
  label: '',
};

export default InputComponent;

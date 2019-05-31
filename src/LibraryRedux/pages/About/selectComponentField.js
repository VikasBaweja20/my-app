/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  placeholder,
  options,
  ...props
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label htmlFor={field.name}>{label}</label>
    <select {...field} {...props}>
      <option value="">{placeholder}</option>
      {options.map(item => (
        <option key={item.value} value={item.value}>{item.text}</option>
      ))}
    </select>

    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

SelectComponent.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

SelectComponent.defaultProps = {
  label: '',
  placeholder: 'Select Value',
};

export default SelectComponent;

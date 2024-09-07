import React from 'react';

const Select = ({ options, value, onChange, id }) => {
  return (
    <select id={id} value={value} onChange={onChange} className="form-select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

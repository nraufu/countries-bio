import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label, type, value, onChange, onClick, options,
}) => {
  switch (type) {
    case 'search':
      return (
        <div className="input input--search">
          <ion-icon name="search-outline" className="input__icon"></ion-icon>
          <input
            type="text"
            className="input__field"
            placeholder={label}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    case 'select':
      return (
        <div className="input input--select">
            <div role='button' className="input--select__field">
                <span className="input--select__field__label">{label}</span>
                <ion-icon name="chevron-down-outline" className="input--select__field__icon"></ion-icon>
            </div>
            <ul className="input--select__options">
                {options.map((option) => (
                    <li key={option.id} className="input--select__option">
                        <a href="#" role='button' onClick={onClick}>{option.label}</a>
                    </li>
                ))}
            </ul>
        </div>
      );

    default:
      return <input
        type="text"
        className="input__field"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
      />;
  }
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.optional,
  onClick: PropTypes.func.optional,
  options: PropTypes.array.optional,
};

export default Input;

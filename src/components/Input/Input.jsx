import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = ({
  label, type, value, onChange, options,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.closest('.input--select')) return;
      setIsDropdownOpen(false);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const selectInputClass = clsx('input input--select', {
    'input--select__open': isDropdownOpen,
  });

  const handleOptionsDropdown = () => {
    setIsDropdownOpen((prevValue) => !prevValue);
  };

  const handleOptionSelection = (selectedOption) => {
    setIsDropdownOpen(false);
    onChange(selectedOption);
  };

  switch (type) {
    case 'search':
      return (
        <div className="input input--search">
          <span className="input--search__icon">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <input
            type="text"
            className="input--search__field"
            placeholder={label}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    case 'select':
      return (
        <div className={selectInputClass}>
          <div
            role="button"
            className="input--select__field"
            onClick={handleOptionsDropdown}
          >
            <span className="input--select__field--label">{value || label}</span>
            <span className="input--select__field--icon">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </div>
          <ul className="input--select__options">
            {options.map((option) => (
              <li key={option.id} className="input--select__options--item">
                <a href="#" role="button" onClick={() => handleOptionSelection(option.value)}>
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return (
        <input
          type="text"
          className="input__field"
          placeholder="Search for a country..."
          value={value}
          onChange={onChange}
        />
      );
  }
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  options: PropTypes.array,
};

export default Input;

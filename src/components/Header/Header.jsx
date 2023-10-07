import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Header = ({ isDarkMode, onThemeChange }) => {
  const headerClass = clsx('header', {
    'header--dark': isDarkMode,
  });

  return (
    <header className={headerClass}>
      <div className="header__wrapper">
        <h1 className="header__title">Where in the world?</h1>

        <button className="header__theme-switcher" onClick={onThemeChange}>
          <span className="header__theme-switcher--icon">
            {isDarkMode ? (
              <ion-icon name="moon"></ion-icon>
            ) : (
              <ion-icon name="moon-outline"></ion-icon>
            )}
          </span>
          <span className="header__theme-switcher--label">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

export default Header;

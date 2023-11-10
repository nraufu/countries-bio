import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Header = () => {
  const context = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">Where in the world?</h1>

        <button className="header__theme-switcher" onClick={ context.toggleTheme }>
          <span className="header__theme-switcher--icon">
            { context?.theme === 'dark' ? (
              <ion-icon name="moon"></ion-icon>
            ) : (
              <ion-icon name="moon-outline"></ion-icon>
            ) }
          </span>
          <span className="header__theme-switcher--label">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import data from './data/data.json';
import Header from './components/Header/Header';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  console.log(data);
  console.log("darkMode: ", darkMode);

  return (
    <>
      <Header isDarkMode={darkMode} onThemeChange={handleThemeChange} />
    </>
  );
};

export default App;

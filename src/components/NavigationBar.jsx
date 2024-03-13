// NavigationBar.jsx
import React from 'react';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <h1>Weather App</h1>
      <ul>
        <li><button>🏠Home</button></li>
        <li><button>🔍Search</button></li>
        <li><button>ℹ️ About</button></li>
      </ul>
    </div>
  );
};

export default NavigationBar;

// SummaryCards.jsx
import React from 'react';

const SummaryCards = ({ data }) => {
  // Check if there is data available
  if (!data || data.length === 0) {
    return null; // Return null if no data is available
  }

  // Extract data for the summary cards
  const cityData = data[0]; // Assuming the data is for one city only
  const { city_name, state_code, temp, max_temp, min_temp, pop, wind_spd, weather } = cityData;

  return (
    <div className="summary-cards">
      {/* Left card: City/State */}
      <div className="summary-card">
        <h3>City/State</h3>
        <p>{city_name}, {state_code}</p>
      </div>
      {/* Middle card: Temp, Max Temp, Min Temp */}
      <div className="summary-card">
        <h3>Temperature</h3>
        <p>Current: {temp}°C</p>
        <p>Max: {max_temp}°C</p>
        <p>Min: {min_temp}°C</p>
      </div>
      {/* Right card: Probability of Precipitation, Wind Speed, Weather Icon */}
      <div className="summary-card">
        <h3>Weather</h3>
        <p>☔: {pop}%</p>
        <p>Wind Speed: {wind_spd} m/s</p>
        <p><img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt={weather.description} /></p>
      </div>
    </div>
  );
};


export default SummaryCards;

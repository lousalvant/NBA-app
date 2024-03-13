// DataList.jsx
import React from 'react';

const DataList = ({ data }) => {
  return (
    <div className="data-list">
      <h2>Data List</h2>
      <div className="data-items">
        {data.map((cityData, index) => (
          <div key={index} className="data-item">
            <div>City: {cityData.city_name}, {cityData.state_code}</div>
            <div>Temperature: {cityData.temp}°C</div>
            <div>Probability of Precipitation: {cityData.pop}%</div>
            <div>Weather: {cityData.weather.description} 
              <img src={`https://www.weatherbit.io/static/img/icons/${cityData.weather.icon}.png`} alt={cityData.weather.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataList;

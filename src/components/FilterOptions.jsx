// FilterOptions.jsx
import React, { useState } from 'react';

const FilterOptions = ({ setFilters }) => {
  const [cityName, setCityName] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleApplyFilters = () => {
    setFilters({
      cityName,
      stateCode,
      timezone
    });
  };

  return (
    <div className="filter-options">
      <input type="text" placeholder="City Name" value={cityName} onChange={(e) => setCityName(e.target.value)} />
      <input type="text" placeholder="State Code" value={stateCode} onChange={(e) => setStateCode(e.target.value)} />
      <input type="text" placeholder="Timezone" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;

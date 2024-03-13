// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SummaryCards from './components/SummaryCards';
import DataList from './components/DataList';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';

const API_KEY = '8f0c3396bef34e7386381db19e012bdd';
const API_BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    cityName: '',
    stateCode: '',
    timezone: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          key: API_KEY,
          city: searchQuery || 'London', // Default to 'London' if searchQuery is empty
          state: filters.stateCode || 'NY', // Default to 'NY' if stateCode is empty
          timezone: filters.timezone || 'America/New_York' // Default to 'America/New_York' if timezone is empty
        });
    
        const response = await fetch(`${API_BASE_URL}?${queryParams.toString()}`);
        const responseData = await response.json();
        setData(responseData.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
  
    fetchData();
  }, [searchQuery, filters]);
  

  return (
    <div className="container">
      <NavigationBar />
      <div className="content-wrapper">
        <div className="summary-cards">
          <SummaryCards data={data} />
        </div>
        <div className="data-list">
        <SearchBar setSearchQuery={setSearchQuery} />
        <FilterOptions setFilters={setFilters} />
        <DataList data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;

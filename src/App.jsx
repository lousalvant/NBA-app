import React from 'react';
import TeamCard from './components/TeamCard';
import PlayerCard from './components/PlayerCard';
import TopTeamsCard from './components/TopTeamsCard';
import DataList from './components/DataList';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="summary-cards-container">
        <TeamCard />
        <PlayerCard />
        <TopTeamsCard />
      </div>
      <div className="data-list-box">
        <DataList />
      </div>
    </div>
  );
};

export default App;

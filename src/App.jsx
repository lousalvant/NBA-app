import React from 'react';
import TeamCard from './components/TeamCard';
import PlayerCard from './components/PlayerCard';
import TopTeamsCard from './components/TopTeamsCard';
import './App.css';


const App = () => {
  return (
    <div>
      {/* <h1>NBA Statistics</h1> */}
      <div className="summary-cards-container">
        <TeamCard />
        <PlayerCard />
        <TopTeamsCard />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import Emissions from './components/emissions';
import Population from './components/population';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Emissions />
      <Population />
    </div>
  );
}

export default App;

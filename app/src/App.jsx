import React from 'react';
import View from './components/common/view';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <View dataToView="emissions" />
      <View dataToView="population" />
    </div>
  );
}

export default App;

import React from 'react';
import View from './components/common/view';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <View dataToFetch="emissions" />
      <View dataToFetch="population" />
    </div>
  );
}

export default App;

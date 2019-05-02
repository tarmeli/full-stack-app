import React from 'react';
import View from './components/common/view';

const App = () => (
  <div className="App" style={{ display: 'flex' }}>
    <View dataToView="emissions" />
    <View dataToView="population" />
  </div>
);

export default App;

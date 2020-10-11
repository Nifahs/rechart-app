import React from 'react';

import './App.css';
import AraChart from './components/AreaChart/AraChart';

import SimplChart from './components/SimplChart/SimplChart';

function App() {
  return (
    <div className="App">
      <SimplChart></SimplChart>
     <AraChart></AraChart>
      
    </div>
  );
}

export default App;

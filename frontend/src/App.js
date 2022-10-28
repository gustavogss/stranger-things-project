import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <StrangerThings />
      {process.env.REACT_APP_NODE_ENV}
    </div>
  );
}

export default App;

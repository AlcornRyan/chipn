import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Charities from './features/featuredCharities/Charities';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Charities/>
     
      </header>
    </div>
  );
}

export default App;


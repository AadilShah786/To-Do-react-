import React from 'react';
import './App.css';
import Left from './components/left';
import Centre from './components/centre';
import Right from './components/right';
import bgimage from './assets/bgimage.jpeg';

function App() {
  return (
    <div className="App">
      <Left/>
      <Centre/>
      <Right/>
    </div>
  );
}

export default App;

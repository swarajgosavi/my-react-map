import React from 'react';
import Map from './components/map.jsx';
import Navbar from './components/navbar.jsx';
import List from './components/List.jsx';
import './App.css';

function App() {
  return(
    <div className="App">
      <Navbar/>
      <div className='flex-container'>
        <div className='flex-item-left'>
          
          <Map/>
        </div>
        <div className='flex-item-right'>
          Recomendations
          <List />
        </div>
      </div>
    </div>
  )
}

export default App;
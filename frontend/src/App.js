import React from 'react'
import NavBar from './NavBar'
import Routes from './Routes'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes />
      </main>
    </div>
  )
}

export default App;

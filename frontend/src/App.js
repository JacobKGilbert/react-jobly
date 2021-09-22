import React from 'react'
import NavBar from './NavBar'
import Routes from './Routes'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='pt-4'>
        <Routes />
      </main>
    </div>
  )
}

export default App;

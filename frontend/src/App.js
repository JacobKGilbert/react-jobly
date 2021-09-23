import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar'
import Routes from './Routes'
import JoblyApi from './api'
import UserContext from './UserContext'
import './css/App.css';


function App() {
  const [token, setToken] = useState(null)
  const [currUser, setCurrUser] = useState(null)
  const history = useHistory()

  const signup = async (data) => {
    const tkn = await JoblyApi.signupUser(data)
    localStorage.setItem('token', JSON.stringify(tkn))
    localStorage.setItem('username', JSON.stringify(data.username))
    setToken(tkn)
    history.push('/')
  }
  const login = async (data) => {
    const tkn = await JoblyApi.loginUser(data)
    localStorage.setItem('token', JSON.stringify(tkn))
    localStorage.setItem('username', JSON.stringify(data.username))
    setToken(tkn)
    history.push('/')
  }
  const logout = () => {
    setCurrUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('username')

    history.push('/')
  }

  const authFuncs = {
    signup,
    login
  }

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem('token'))
    const username = JSON.parse(localStorage.getItem('username'))
    const getUser = async (username) => {
      const user = await JoblyApi.getUser(username)
      setCurrUser(user)
    }
    if (token || localToken) {
      getUser(username)
    }
  }, [token])

  return (
    <div className="App">
      <UserContext.Provider value={{currUser, setCurrUser}}>
        <NavBar logout={logout} />
        <main className="pt-5 container">
          <Routes functions={authFuncs} />
        </main>
      </UserContext.Provider>
    </div>
  )
}

export default App;

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
import { Button, ButtonGroup } from 'reactstrap'
import './css/Home.css'

const Home = () => {
  const user = useContext(UserContext)

  if (!user) {
    return (
      <div className="Home d-flex flex-column justify-content-center align-items-center">
        <h1>Jobly</h1>
        <p>Find the right job, easy.</p>
        <ButtonGroup>
          <Link to="/login">
            <Button outline color="primary" size="md">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button outline color="primary" size="md">
              Sign Up
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    )
  } else {
    return (
      <div className="Home d-flex flex-column justify-content-center align-items-center">
        <h1>Jobly</h1>
        <p>Find the right job, easy.</p>
        <h3>Welcome, {user.firstName} {user.lastName}!</h3>
      </div>
    )
  }

  
}

export default Home
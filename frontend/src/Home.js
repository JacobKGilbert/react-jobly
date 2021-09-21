import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from 'reactstrap'
import './Home.css'

const Home = () => {
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
}

export default Home
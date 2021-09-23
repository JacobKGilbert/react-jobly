import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Button } from "reactstrap";
import UserContext from './UserContext'

const NavBar = ({ logout }) => {
  const { currUser } = useContext(UserContext)
  let userOptions

  if (!currUser) {
    userOptions = (
      <Nav navbar className="ms-auto">
        <NavItem>
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
    )
  } else {
    userOptions = (
      <Nav navbar className="ms-auto">
        <NavItem>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <Button color='danger' onClick={logout}>
            Log Out {currUser.username}
          </Button>
        </NavItem>
      </Nav>
    )
  }

  return (
    <Navbar fixed='top' expand='md' color='dark' dark>
      <NavLink to="/" className="navbar-brand">
        Jobly
      </NavLink>

      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </NavItem>
      </Nav>
      {userOptions}
    </Navbar>
  )
}

export default NavBar
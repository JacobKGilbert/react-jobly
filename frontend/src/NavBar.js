import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Button } from "reactstrap";
import UserContext from './UserContext'

const NavBar = ({ logout }) => {
  const user = useContext(UserContext)
  let userOptions

  if (!user) {
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
            Log Out {user.username}
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
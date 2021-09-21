import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
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
      <Nav navbar className='ms-auto'>
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
    </Navbar>
  )
}

export default NavBar
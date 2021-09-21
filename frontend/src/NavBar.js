import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        Jobly
      </NavLink>

      <Nav className="navbar-nav mr-auto">
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar
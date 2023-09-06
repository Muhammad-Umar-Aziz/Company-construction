import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Headerimage from '../Assests/basket.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container className='py-3'>
          <NavLink to="/" className='navbar-brand text-decoration-none'>
            <span className='header_fonts'>Construction Company Landing</span>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_fonts text-center text-lg-start">
              <NavLink to="/Project" className='nav-link text-decoration-none text-dark'><span>Project</span></NavLink>
              <NavLink to="/Blog" className='nav-link text-decoration-none text-dark'><span>Blog</span></NavLink>
              <NavLink to="/Portfolio" className='nav-link text-decoration-none text-dark'><span>Portfolio</span></NavLink>
              <NavLink to="/Service" className='nav-link text-decoration-none text-dark'><span>Service</span></NavLink>
              <NavLink to="/Services" className='nav-link text-decoration-none text-dark'><span>Services</span></NavLink>
              <NavLink to="/Contact" className='nav-link text-decoration-none text-dark'><span>Contact</span></NavLink>
              <NavLink to="/About" className='nav-link text-decoration-none text-dark'><span>About</span></NavLink>
              <NavLink to="/Home" className='nav-link text-decoration-none text-dark'><span>Home</span></NavLink>
              <NavLink className='nav-link'><img src={Headerimage} className='ps-2' alt="Header Icon" /></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

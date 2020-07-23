import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import React from 'react';
import { NavLink as RRNavLink} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

import logo from '../../pictures/kotopes_logo2.png';
import cartIcon from '../../pictures/icons/shopping-cart-hand-drawn-tool.svg';

const NavBar = () =>{
    return (
    // <div className = "topHomeLink">
    <>
    <div className = "navHeaderContainer">
    <div className = "shopping-cart-icon-container">
      <RRNavLink to="/shopping-cart">
          <div className = "shopping-cart-icon">
            <img alt="shopping-cart-link" src = {cartIcon} />
          </div>
      </RRNavLink>
      </div>
    <div className = "logoOuterContainer">
      <RRNavLink to="/about">
          <div className = "logoInnerContainer">
            <img src = {logo} />
          </div>
      </RRNavLink>
      </div>
    </div>
    <div className = "container customNavBar">
      <Nav className='bg-white text-white border-primary' justified = {true} pills fill  tabs>
        <NavItem >
          <NavLink className='link-1 text-primary' tag={RRNavLink} exact to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link-2 text-primary' tag={RRNavLink} exact to="/music">Music</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link-3 text-primary' tag={RRNavLink} exact to="/video">Video</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link-3 text-primary' tag={RRNavLink} exact to="/photos">Photos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link-4 text-primary' tag={RRNavLink} exact to="/tour">Tour</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link-5 text-primary' tag={RRNavLink} exact to="/merch">Merch</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link-6 text-primary' tag={RRNavLink} exact to="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
    </>


    );
};

export {NavBar};
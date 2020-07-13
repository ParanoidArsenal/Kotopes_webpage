import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import React from 'react';
import { NavLink as RRNavLink} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

import logo from '../../pictures/kotopes_logo2.png';

const NavBar = () =>{
    return (
        // <div className = "topHomeLink">
        //     <Link to='/'>Home</Link>
        // </div>

//         <div className = "container">
//         <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">

//             <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
            
//             <div className = "collapse navbar-collapse" id="navbarColor01">
//             <ul className = "navbar-nav mr-auto">
//                 <li className = "nav-item"><NavLink className = "nav-link" to='/about'>About</NavLink></li>
//                 <li className = "nav-item"><NavLink className = "nav-link" to='/music'>Music</NavLink></li>
//                 <li className = "nav-item"><NavLink className = "nav-link" to='/video'>Video</NavLink></li>
//                 <li className = "nav-item"><NavLink className = "nav-link" to='/tour'>Tour</NavLink></li>
//                 <li className = "nav-item"><NavLink className = "nav-link" to='/merch'>Merch</NavLink></li>
//                 <li className = "nav-item"><NavLink className = "nav-link" to='/contact'>Contact</NavLink></li>
//             </ul>
//             <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
//             <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
//             </form>
            
//             </div>
//         </nav>
//         </div>

    // <div className = "topHomeLink">
    <>
    <div className = "logoOuterContainer">
      <div className = "logoInnerContainer">
        <img src = {logo} />
      </div>
    </div>
    <div className = "container customNavBar">
      <Nav className='bg-white text-white border-primary' justified = {true} pills fill  tabs>
        <NavItem >
          <NavLink className='link-1 text-dark' tag={RRNavLink} exact to="/about">About</NavLink>
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
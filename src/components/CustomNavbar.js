import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import $ from "jquery";
import './CustomNavbar.css';



export default class CustomNavbar extends Component {

  render() {
    return (
  <body>

<div id="menubar1">
  <nav >
      <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="Gallery">Gallery</a></li>
          <li><a href="Menu">Menu</a></li>
          <li><a href="Promotion">Promotion</a></li>
          <li><a href="About">About Us</a></li>
          <li><a href="Contact">Contact Us</a></li>
      </ul>
  </nav>
  </div>
</body>

    )
  }
}

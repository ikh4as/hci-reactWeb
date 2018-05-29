import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Promotion from './components/Promotion';
import Navbar1st from './components/CustomNavbar1st';
import Navbar from './components/CustomNavbar';
import Contact from './components/Contact';
import Text from './components/text';
import $ from "jquery";

 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

    window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   if (document.body.scrollTop > 700 || document.documentElement.scrollTop >700) {
        document.getElementById("menubar1").style.top = "0";
    } else {
        document.getElementById("menubar1").style.top = "-100px";
    }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar1st /> 
          <Navbar /> 
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Promotion" component={Promotion} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />          
          <Text /> 
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,Carousel} from 'react-bootstrap';
import './Contact.css';
import '../animate.css';
import $ from "jquery";


export default class Home extends Component {

  render() {
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
     if (document.body.scrollTop > 540 || document.documentElement.scrollTop >540) {
        document.getElementById("menubar1").style.top = "0";
    } else {
        document.getElementById("menubar1").style.top = "-100px";
    } 
         if (document.body.scrollTop > 540 || document.documentElement.scrollTop >540) {
        document.getElementById("showcon1").style.width = "17%";
    } else {
        document.getElementById("showcon1").style.width = "0%";
    }
 if (document.body.scrollTop > 540 || document.documentElement.scrollTop >540) {
        document.getElementById("showcon2").style.width = "17%";
    } else {
        document.getElementById("showcon2").style.width = "0%";
    }
 if (document.body.scrollTop > 540 || document.documentElement.scrollTop >540) {
        document.getElementById("showcon3").style.width = "17%";
    } else {
        document.getElementById("showcon3").style.width = "0%";
    }
 if (document.body.scrollTop > 540 || document.documentElement.scrollTop >540) {
        document.getElementById("showcon4").style.width = "17%";
    } else {
        document.getElementById("showcon4").style.width = "0%";
    }
 if (document.body.scrollTop > 540 || document.documentElement.scrollTop >540) {
        document.getElementById("showcon5").style.width = "17%";
    } else {
        document.getElementById("showcon5").style.width = "0%";
    }
     if (document.body.scrollTop > 800 || document.documentElement.scrollTop >800) {
        document.getElementById("map").style.height = "600px";
    } else {
        document.getElementById("map").style.height = "0px";
    }

}
    return (
<div>
<section>
<div className="bg5"></div>
<a href="" class="scroll-down" address="true"></a>
</section>
<section class="ok"></section>
<div id="bgContact">
<h1 Style="font-size:5em;color:#ff9c0f ; text-align: center; margin-top:0; padding-top:8%; font-family: BACK TO BLACK DEMO;">Contact</h1>
<div className="bgcontact">
<p className="textcon">GET IN TOUCH WITH US.</p>
  <div className="cont">
    <div id="showcon1" className="contact">
      <a  href="https://www.facebook.com/boy.sopon.7"target="_blank"><img Style="padding:10px;"src="assets/facebook.png" /><p Style="font-family:'Oswald';color: #fff; font-weight:normal;margin-left: 10px;">FACEBOOK</p></a>    
   </div>

    <div id="showcon2"className="contact">
      <a href="https://www.instagram.com/boysopon/"target="_blank"><img Style="padding:10px;" src="assets/ins.png"/><p Style="font-family:'Oswald';color: #fff; font-weight:normal;margin-left: 10px;">INSTAMGAM</p></a>
    </div>

    <div id="showcon3"className="contact">
      <a href="https://www.youtube.com/channel/UCzUufSr_SR6VfP_W_EhVfIQ?view_as=subscriber"target="_blank"><img Style="padding:10px;" src="assets/youtube.png"/><p Style="font-family:'Oswald';color: #fff; font-weight:normal; margin-left: 16px;">YOUTUBE</p></a>
    </div>
     <div id="showcon4"className="contact" Style="width:14%">
      <a><img Style="padding:10px;" src="assets/phone.png"/><p Style="font-family:'Oswald';color: #fff; font-weight:normal;">095-3455098</p></a>
    </div>
    <div id="showcon5"className="contact">
      <a><img Style="padding:10px;" src="assets/email.png"/><p Style="font-family:'Oswald';color: #fff; font-weight:normal;">Beefluv@gmail.com</p></a>
    </div>
    <div>
  
  </div>  

</div>
<div className="bgmap">
    <p className="textcon">FIND ME</p>
<div Style="width:80%;padding-left:20%;">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7754.1511406425725!2d100.49384937935362!3d13.653166893778094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing+Mongkut&#39;s+University+of+Technology+Thonburi!5e0!3m2!1sen!2sth!4v1517295710509" id="map" width="800" height="0" frameborder="0" Style="border:0" ></iframe>
</div>
  </div>
</div> 
</div>
</div> 
     )
  }
}

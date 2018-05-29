import React, { Component } from 'react'
import { Grid, Col, Image,Row,Carousel } from 'react-bootstrap';
import './Menu.css';

export default class About extends Component {
  
  render() {
    return (
      <div>
        <section>
<div className="bg2"></div>
<a href="" class="scroll-down" address="true"></a>
</section>

<section class="ok"></section>

<div className="Carousel1">
<h1 Style="font-size:5em;color:#ff9c0f ; text-align: center; margin-top:0; padding-top:7%; font-family: BACK TO BLACK DEMO;">News</h1>
    <Carousel >
      <Carousel.Item >
        <img  Style="width:100%; margin-top:3%; padding-bottom:4%; " src="assets/new-menu.png" />
      </Carousel.Item>
      <Carousel.Item >
        <img  Style="width:100%; margin-top:3%; padding-bottom:4%; " src="assets/new-menu2.png" />
      </Carousel.Item>
      <Carousel.Item >
        <img  Style="width:100%; margin-top:3%; padding-bottom:4%; " src="assets/new-menu3.png" />
      </Carousel.Item>
    </Carousel>
</div>

<div id="bgAbout">

<h1 Style="font-size:5em;color:#ff9c0f ; text-align: center;  padding-top:0%; padding-bottom:2%; font-family: BACK TO BLACK DEMO;">Menu</h1>
<img Style="width:40%; margin-left:30%;  margin-top:3%; padding-bottom:5%; " src="assets/Menu/kkk.png" />

<div class="row" Style="padding-bottom:2%;">
  <div className="col-2-3">
    <div className="show show-second">
      <img src="./assets/Menu/kkk1.png"/>
      
      <div className="mask"Style="padding-top:50%;">
        <h2 Style="font-family:'Oswald';  font-weight: bold; font-size:5em;">MAINS</h2>
        <a Style="font-family:'Oswald';  font-weight: bold; font-size:3em;" className="more">Order</a>
      </div>
    
    </div>
  
  </div>
  <div className="col-2-3">
    <div className="show show-second">
      <img src="./assets/Menu/kkk2.png"/>
      
      <div className="mask"Style="padding-top:50%;">
        <h2 Style="font-family:'Oswald';  font-weight: bold;font-size:5em;">STEAK SIDES</h2>
        <a Style="font-family:'Oswald';  font-weight: bold; font-size:3em;" className="more">Order</a>
      </div>
    
    </div>
  
  </div>

  <div className="col-2-3">
    <div className="show show-second">
      <img src="./assets/Menu/kkk3.png"/>
      
      <div className="mask"Style="padding-top:50%;">
        <h2 Style="font-family:'Oswald';  font-weight: bold; font-size:5em;">DRINKS</h2>
        <a Style="font-family:'Oswald';  font-weight: bold; font-size:3em;" className="more">Order</a>
      </div>
    
    </div>
  
  </div>  

  <div className="col-2-3">
    <div className="show show-second">
      <img src="./assets/Menu/Desserts.jpg"/>
      
      <div className="mask"Style="padding-top:50%;">
        <h2 Style="font-family:'Oswald';  font-weight: bold; font-size:5em;">DESSERTS</h2>
        <a Style="font-family:'Oswald';  font-weight: bold; font-size:3em;" className="more">Order</a>
      </div>
    
    </div>
  
  </div>
    
</div> 

     
      </div>
      </div>
    )
  }
}

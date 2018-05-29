import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,Carousel} from 'react-bootstrap';
import './Promotion.css';
import '../animate.css';
import $ from "jquery";

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);



export default class Home extends Component {

  render() {
    return (
<div>
<section>
<div className="bg3"></div>
<a href="" class="scroll-down" address="true"></a>
</section>
<section class="ok"></section>
<div id="bgPromotion">
<h1 Style="font-size:5em;color:#ff9c0f ; text-align: center; margin-top:0; padding-top:8%; font-family: BACK TO BLACK DEMO;">Promotion</h1>

<figure className="snip1436">
  <img src="assets/sale1.jpg" alt="sample77" />
  <figcaption>
    <h3> Menu of Steak Sale 20 %</h3>
    <p>Our Restaurant is offering a deal for you to  enjoy our  steak with</p>
    <p>discount price   20%</p><a href="Menu" className="read-more">Buy now</a>
  </figcaption>
</figure>

<figure className="snip1436">
  <img src="assets/sale2.jpg" alt="sample77" />
  <figcaption>
    <h3> Buy1  Get 1 Free </h3>
    <p>Enjoy a free Drinks when you buy 1 of All menu of Dessert.</p><a href="Menu" className="read-more">Buy now</a>
  </figcaption>
</figure>

<figure className="snip1436">
  <img src="assets/sale3.jpg" alt="sample77" />
  <figcaption>
    <h3> Wednesday's  Special</h3>
    <p>Every Wednesday at 17.00- 20.00 pm. We have a special deal for you. All Menu in Our Restaurant discount 10 % 
</p><a href="Menu" className="read-more">Buy now</a>
  </figcaption>
</figure>

</div>
</div> 
     )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,Carousel} from 'react-bootstrap';
import './Home.css';
import '../animate.css';
import $ from "jquery";

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop >500) {
        document.getElementById("menubar1").style.top = "0";
    } else {
        document.getElementById("menubar1").style.top = "-100px";
    }
}

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
$overlay.append($image);
$("body").append($overlay);
  $("#photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });


export default class Home extends Component {

  render() {
    return (
<div>
<section>
<div className="bg"></div>
<a href="" class="scroll-down" address="true"></a>
</section>

<section class="ok"></section>
<div id="bgCarouselFood">
<div className="Carousel">
<h1 Style="font-size:5em;color:#ff9c0f ; text-align: center; margin-top:0; padding-top:15%; font-family: BACK TO BLACK DEMO;">Menu</h1>
    <Carousel >
      <Carousel.Item >
      <a href="Menu">
        <img  Style="width:50%; margin-left:25%; margin-top:3%; padding-bottom:12%; " src="assets/menu1.png" />
      </a>
        <div className="textmenu">Marinated Flank Steak</div>
      </Carousel.Item>
      <Carousel.Item >
      <a href="Menu">
        <img  Style="width:50%; margin-left:25%; margin-top:3%; padding-bottom:12%;" src="assets/menu2.png" />
      </a>
        <div className="textmenu">Super Spicy Steak</div>
      </Carousel.Item>
      <Carousel.Item>
      <a href="Menu">
        <img Style="width:50%; margin-left:25%; margin-top:3%; padding-bottom:12%; " src="assets/menu3.png" />
      </a>
        <div className="textmenu">Beef Porterhouse</div>
      </Carousel.Item>
      <Carousel.Item>
      <a href="Menu">
        <img Style="width:50%; margin-left:25%; margin-top:3%; padding-bottom:12%; " src="assets/menu4.png" />
      </a>
        <div className="textmenu">Spicy Beef</div>
      </Carousel.Item>
    </Carousel>
</div>
</div>
<div className="BgGallery">
<h1 Style="font-size:5em;color:#ff9c0f; text-align: center; margin-top:0; padding-top:8%; font-family: BACK TO BLACK DEMO;">Gallery</h1>
<Grid>
<div className="grids">
<div className="accordion">
  <ul>
    <li>
      <div>
        <a>
          <h2 Style="font-family:'Oswald';  font-weight: bold;">BeefLuv France</h2>
          <p Style="font-family:'Oswald';">John SMITH 118 Boulevard Saint-Germain 75006 Paris France</p>
        </a>
      </div>
    </li>
    <li>
      <div>
        <a>
          <h2 Style="font-family:'Oswald';  font-weight: bold;">BeefLuv Canada</h2>
          <p Style="font-family:'Oswald';">2-234 Pine St. N. Canada</p>
        </a>
      </div>
    </li>
    <li>
      <div>
        <a>
          <h2 Style="font-family:'Oswald';  font-weight: bold;">BeefLuv Thailand</h2>
          <p Style="font-family:'Oswald';">Ban Bang Muang, Phangnga, Thailand.</p>
        </a>
      </div>
    </li>
    <li>
      <div>
        <a>
          <h2 Style="font-family:'Oswald';  font-weight: bold;">BeefLuv Singapore</h2>
          <p Style="font-family:'Oswald';">4, Leng Kee Road #06-07 SiS Building Singapore</p>
        </a>
      </div>
    </li>
    <li>
      <div>
        <a>
          <h2 Style="font-family:'Oswald';  font-weight: bold;">BeefLuv England</h2>
          <p Style="font-family:'Oswald';">3 Edgar Buildings George Street Bath England</p>
        </a>
      </div>
    </li>
    <li>
      <div>
        <a>
          <h2 Style="font-family:'Oswald';  font-weight: bold;">BeefLuv Germany</h2>
          <p Style="font-family:'Oswald';">Langenhorner Chaussee 600  Hamburg Germany</p>
        </a>
      </div>
    </li>
  </ul>
</div>
    

</div>
</Grid>
</div>


<div className="home"> 
    <a href="Menu" class="navbar-brand button ">News</a>     
</div>

</div> 

     )
  }
}

import React, { Component } from 'react'
import { Grid, Col, Image,Row } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  
  render() {
    return (
      <div>
        <section>
<div className="bg4"></div>
<a href="" class="scroll-down" address="true"></a>
</section>

<section class="ok"></section>
<div id="bgAbout">
<h1 Style="font-size:5em;color:#ff9c0f ; text-align: center; margin-top:0; padding-top:8%; padding-bottom:2%; font-family: BACK TO BLACK DEMO;">About</h1>
        
        <Grid><p  Style="font-family: 'Quicksand', sans-serif; font-weight:normal; padding-bottom:5%; color:#fff; font-size:1.2em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Haneen” Dakuwa kaoji founder of BEEFLUV since 2007.
Born on March 24, 1997, is a restaurant manager Matsuoka. BEEFLUV is a famous restaurant chain of Japan. There are 17,000 restaurants in the world. It is the second largest restaurant network in the world.
The first branch of Thailand at Central Rama 2. BEEFLUV in Thailand organized by “Famie” Jorakeii Numisanao Be the administrator. (BEEFLUV in Thailand) Is still going to dominate with the development of innovation and branch expansion. The goal is to expand more than 800 branches by 2020.
BEEFLUV It is known as the slogan  “品質優先” means “Quality must come first.”
</p>
        <Row className="show-grid text-center">
          <Col xs={12} sm={12} className="person-wrapper">
            <Image src="assets/person-1.png" circle className="Boss"/>
            <h3 Style="font-family:'Oswald';color:#fff;">Haneen</h3>
            <p Style="font-family:'Oswald';color:#fff; margin-bottom:5%;"> Dakuwa kaoji || Founder of BEEFLUV
</p>
          </Col>
        </Row>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.png" circle className="profile-pic"/>
            <h3 Style="font-family:'Oswald';color:#fff;">Famie</h3>
            <p Style="font-family:'Oswald';color:#fff;font-size:1.2em;">Jorakeii Numisanao ||  Administrator. BEEFLUV in Thailand</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3 Style="font-family:'Oswald';color:#fff;">Bogiya</h3>
            <p Style="font-family:'Oswald';color:#fff;font-size:1.2em;"> Sopunika  gunikene || Executive Chef.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-4.png" circle className="profile-pic"/>
            <h3 Style="font-family:'Oswald';color:#fff;">Auniya</h3>
            <p Style="font-family:'Oswald';color:#fff;font-size:1.2em;">Ikkasu Nouae || Financial Consultant</p>
          </Col>
        </Row>
        </Grid>
      </div>
      </div>
    )
  }
}

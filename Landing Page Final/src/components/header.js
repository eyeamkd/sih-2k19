import React, { Component } from 'react';
import Nav from "./nav";
import msme from "../images/msme.png";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1><div className="logo-img"> <img src={ msme } /></div>Payment Recovery </h1>
            <div>
              <p className="aboutpara"><b>Ministry of Micro, Small & Medium Enterprises provides help to budding entrepreneurs in every step to transform their idea to a start-up and finally to a company.</b></p>
              <div><a className="contact" href="#">Sign Up</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;

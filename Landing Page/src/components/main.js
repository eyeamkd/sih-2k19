import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>About Us</h2>
            <div>
             <p>MSME, which stands for Micro, Small & Medium Enterprises, provides help to budding entrepreneurs in every step to transform their idea to a start-up and finally to a company. They are classified into two classes: <br/><br/>1. Manufacturing Enterprises-he enterprises engaged in the manufacture or production of goods pertaining to any industry specified in the first schedule to the industries (Development and regulation) Act, 1951) or employing plant and machinery in the process of value addition to the final product having a distinct name or character or use. The Manufacturing Enterprise are defined in terms of investment in Plant & Machinery. <br/><br/> 2. Service Enterprises:-The enterprises engaged in providing or rendering of services and are defined in terms of investment in equipment.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="fas fa-search"></i></p>
                <p className="service-title">Transparent</p>
                <p>Every step and detail in the process is completely transparent with a support page, FAQ Page and a Grievance Page</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="fas fa-crop"></i></p>
                <p className="service-title">Seamless</p>
                <p>The complete process from requesting loan to getting it approved to paying it back in installments, it is amazingly seamless.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="fas fa-stopwatch"></i></p>
                <p className="service-title">Real-Time</p>
                <p>Track your loan repayment and credibility for a new loan with real time updates on current and previous installments data.</p>
              
          </div>
        </div>

            </div>
        <section>
            <h2>Our Mission</h2>
            <div>
              <p>To promote e-Governance for empowering citizens, promoting the inclusive and sustainable growth of the Electronics, IT & ITeS industries, enhancing India’s role in Internet Governance, adopting a multipronged approach that includes development of human resources, promoting R&D and innovation, enhancing efficiency through digital services and ensuring a secure cyber space.</p>
            </div>
        </section>

        <div className="achievediv"><h1 className="achievements">Achievements</h1></div>
        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>


        <section>
            <h2>Our Objectives</h2>
            <div>
            <ul>
              <li>e-Government: Providing e-infrastructure for delivery of e-services</li>
              <li>e-Industry: Promotion of electronics hardware manufacturing and IT-ITeS industry</li>
              <li>e-Innovation / R&D: Implementation of R&D Framework - Enabling creation of Innovation/ R&D Infrastructure in emerging</li>
              <li>areas of ICT&E/Establishment of mechanism for R&D translation</li>
              <li>e-Learning: Providing support for development of e-Skills and Knowledge network</li>
              <li>e-Security: Securing India’s cyber space</li>
              <li>e-Inclusion: Promoting the use of ICT for more inclusive growth</li>
              <li>Internet Governance: Enhancing India’s role in Global Platforms of Internet Governance.</li>
            </ul>
            </div>
        </section>


        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;

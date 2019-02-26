import React, { Component } from 'react';

class ApplyNav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Pay<span>Rec</span></li>
          </ul>
          <ul>
              <li><a href="#" title="About">About</a></li>
              <li><a href="#" title="Apply Loan"><strong>Apply Loan</strong></a></li>
              <li><a href="#" title="FAQ">FAQ</a></li>
          </ul>
      </nav>
    );
  }
}

export default ApplyNav;

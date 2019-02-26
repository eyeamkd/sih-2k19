import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Pay<span>Rec</span></li>
          </ul>
          <ul>
              <li><a href="#" title="About">About</a></li>
              <li><a href="#" title="Sign In">Sign In</a></li>
              <li><a href="#" title="FAQ">FAQ</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;

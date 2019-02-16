import React, { Component } from 'react';
import './App.css'; 
import Signin from './Components/LoginModule/Signin'; 
import Navbar from './Components/Navbar/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Navbar/>
      </div>
    );
  }
}

export default App;

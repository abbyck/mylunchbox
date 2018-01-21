import React, { Component } from 'react';
import NavBar from './Navbar';
import HeroText from './HeroText'

class FirstPage extends Component {
  render() {
    return (
      <div className="LandingBG">
          <NavBar />
          <HeroText />
      </div>
    );
  }
}

export default FirstPage;

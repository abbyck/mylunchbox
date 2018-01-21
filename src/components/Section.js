import React, { Component } from 'react';
import Map from './Map';
import Footer from './Footer';

class FirstPage extends Component {
  render() {
    return (
      <div className="Section1">
            <Map />
            <hr/>
            <Footer />
      </div>
    );
  }
}

export default FirstPage;

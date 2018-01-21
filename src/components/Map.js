import React, { Component } from 'react';
import AppPromo from './AppPromo';


class Map extends Component {
  render() {
    return (
      <div className="sectiondiv">
      <center>
        <div className="innercard text-center">
          <h1 class="green centre" >CURRENTLY WE'RE HERE!</h1>
          <br/>
          <br/>
          <img className="hmap" src="map.jpg" />
       </div>
       <div className="innercard text-center">
          <AppPromo></AppPromo>
       </div>
       </center>
      </div>
    );
  }
}

export default Map;

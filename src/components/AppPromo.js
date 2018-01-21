import React, { Component } from 'react';


class AppPromo extends Component {
  render() {
    return (
      <div>
       <h1 className="green">USE OUR APP FOR ORDERING</h1>
       <br/>
       <br/>
       <p className="apppromo"><i className="fa fa-android fa-5x green"></i> <img src="screen.png"/><i className="fa fa-apple fa-5x green"></i></p>
       <p className="getition"><img className="playstore" src="playstore.png"/><img className="appstore" src="appstore.png"/></p>
      </div>
    );
  }
}

export default AppPromo;

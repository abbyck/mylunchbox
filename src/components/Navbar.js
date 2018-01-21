import React, { Component } from 'react';



class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand green" href="#">MyLunchBox</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">MENU</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">OUR STORY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT US</a>
                    </li>
                    </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">ORDER ONLINE</button>
            </form>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

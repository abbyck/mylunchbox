import React, { Component } from 'react';
import FirstPage from './components/FirstPage';
import Section from './components/Section';



class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstPage />
        <Section />
      </div>
    );
  }
}

export default App;

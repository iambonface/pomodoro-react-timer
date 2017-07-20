import React, { Component } from 'react';
import '../css/App.css';

import Wrap from './Wrap';

import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <Wrap />
      </div>
    );
  }
}

export default App;

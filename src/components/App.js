import React, { Component } from 'react';
import '../css/App.css';

import Wrap from './Wrap';

import Wrapper from './Wrapper';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      minutes: 25,
      breakMinutes: 5
    }
  }
  render() {
    return (
      <div className="App">
        <Wrapper minutes={this.state.minutes}
                 breakMinutes={this.state.breakMinutes}/>
        <Wrap />
      </div>
    );
  }
}

export default App;

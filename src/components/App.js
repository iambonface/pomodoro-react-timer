import React, { Component } from 'react';
import '../css/App.css';

import Wrap from './Wrap';

import Wrapper from './Wrapper';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      minutes: 25,
      breakMinutes: 5,
    }
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
  }

  handleSessionIncrement(){
    this.setState((prevState, props)=>{
      return { minutes: prevState.minutes + 1}
    })
  }

  handleSessionDecrement(){
    if(this.state.minutes > 0){
      this.setState((prevState, props)=>{
        return { minutes: prevState.minutes - 1}
      })
    }

  }

  render() {
    return (
      <div className="App">
        <Wrapper minutes={this.state.minutes}
                 breakMinutes={this.state.breakMinutes}
                 handleSessionIncrement={this.handleSessionIncrement}
                 handleSessionDecrement={this.handleSessionDecrement}
                 />
        <Wrap />
      </div>
    );
  }
}

export default App;

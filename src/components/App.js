import React, { Component } from 'react';
import '../css/App.css';

import Wrap from './Wrap';

import Wrapper from './Wrapper';

import moment from 'moment';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      hours: 0,
      seconds: 0,
      minutes: 0,
      setSession: 25,
      start:false,
      finish: false,
      totalSeconds: 0
    }

    this.clickIncreaseSession = this.clickIncreaseSession.bind(this);
    this.clickDecreaseSession = this.clickDecreaseSession.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.evalTime = this.evalTime.bind(this);
  }

  clickIncreaseSession(){
    this.setState((prevState, props)=>{
      return { setSession: prevState.setSession + 1}
    })
  }

  clickDecreaseSession(){
    if(this.state.setSession > 0){
      this.setState((prevState, props)=>{
        return { setSession: prevState.setSession - 1}
      })
    }
  }

  startTimer(){
    this.setState({
      start: !this.state.start
    })
    this.evalTime();
  }

  prefixZero(val){
    if(val < 10){
      return "0" + val;
    }
    return val;
  }

  evalTime(){
    let hours = this.prefixZero(Math.floor((this.state.setSession * 60)/60/60));
    let minutes = this.prefixZero(Math.floor((this.state.setSession * 60)/60 % 60));
    let seconds = this.prefixZero( Math.floor((this.state.setSession * 60) % 60));
    this.setState({
      hours:hours,
      minutes: minutes,
      seconds: seconds
    })
  }


  render() {
    return (
      <div className="App">
        <Wrapper hours={this.state.hours}
                 minutes={this.state.minutes}
                 seconds={this.state.seconds}
                 setSession={this.state.setSession}
                 startTimer={this.startTimer}
                 start={this.state.start}
                 clickIncreaseSession={this.clickIncreaseSession}
                 clickDecreaseSession={this.clickDecreaseSession}
                                                  />
        <Wrap
              start={this.state.start}
              startTimer={this.startTimer}/>
      </div>
    );
  }
}

export default App;

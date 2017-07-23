import React, { Component } from 'react';
import '../css/App.css';

import Wrap from './Wrap';

import Wrapper from './Wrapper';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      hours: 0,
      seconds: 0,
      minutes: 0,
      setMoment: 25,
      breakMinutes: 5,
      showTimer: false
    }
    this.handleTimer = this.handleTimer.bind(this);
    this.clickIncreaseSession = this.clickIncreaseSession.bind(this)
  }

  handleTimer(){
    this.setState({
      showTimer: !this.state.showTimer
    })

    this.splitTimeUnits()
  }

  clickIncreaseSession(){
    this.setState((prevState, props)=>{
      return{ setMoment: prevState.setMoment + 1}
    })
  }

  /* handleCountdown(){
     let _this = this
     _this.numOfSeconds = 0

     _this.numOfSeconds = this.state.minutes * 60

     console.log(this.numOfSeconds)
     this.splitTimeUnits()
  }*/

  splitTimeUnits(){
    let totalSeconds = this.state.setMoment * 60

    let hours = Math.floor(totalSeconds/60/60);
    let minutes = Math.floor(totalSeconds/60 % 60);
    let seconds = Math.floor(totalSeconds % 60)

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
    console.log("sec " +  this.state.seconds)
  }

  render() {
    return (
      <div className="App">
        <Wrapper
                 hours={this.state.hours}
                 minutes={this.state.minutes}
                 seconds={this.state.seconds}
                 setMoment={this.state.setMoment}
                 showTimer={this.state.showTimer}
                 clickIncreaseSession={this.clickIncreaseSession}

                 />
        <Wrap handleTimer={this.handleTimer}
              showTimer={this.state.showTimer}/>
      </div>
    );
  }
}

export default App;

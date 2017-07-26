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
      running: false,
      timer: 0,
      isSession:null
    }

    this.clickIncreaseSession = this.clickIncreaseSession.bind(this);
    this.clickDecreaseSession = this.clickDecreaseSession.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this)
    this.evalTime = this.evalTime.bind(this)
  }

  clickIncreaseSession(){
    this.setState({
      isSession:true
    })
    this.setState((prevState, props)=>{
      return { setSession: prevState.setSession + 1}
    })
  }

  clickDecreaseSession(){
    this.setState({
      isSession:true
    })
    if(this.state.setSession > 0){
      this.setState((prevState, props)=>{
        return { setSession: prevState.setSession - 1}
      })
    }
  }

  componentDidMount(){

  }

  startTimer(){
    console.log(this.state.isSession)
    this.setState({
        start: !this.state.start,
        timer: this.state.setSession * 60
    })

   this.intervalId = setInterval(() => {
     this.evalTime()
       if(this.state.timer > 0){
         this.setState((prevState, props)=>{
         return {
           timer: prevState.timer - 1}
         })
       }
       if(this.state.timer === 0){
         this.break()
       }

    }, 1000)
  }
  pauseTimer(){
    this.setState({
      start: !this.state.start
    })
    clearInterval(this.intervalId)
  }

  prefixZero(val){
    if(val < 10){
      return "0" + val;
    }
    return val;
  }

  evalTime(){
    let hours = this.prefixZero(Math.floor(this.state.timer/60/60));
    let minutes = this.prefixZero(Math.floor(this.state.timer/60 % 60));
    let seconds = this.prefixZero(this.state.timer % 60);

    this.setState({
      hours:hours,
      minutes: minutes,
      seconds: seconds
    })
  }




    getBreak(){
      console.log("breaking..")
    }

  render() {
    return (
      <div className="App">
        <Wrapper hours={this.state.hours}
                 minutes={this.state.minutes}
                 seconds={this.state.seconds}
                 setSession={this.state.setSession}
                 startTimer={this.startTimer}
                 running={this.state.running}

                 pauseTimer={this.pauseTimer}
                 start={this.state.start}
                 clickIncreaseSession={this.clickIncreaseSession}
                 clickDecreaseSession={this.clickDecreaseSession}
                                                  />
        <Wrap
              start={this.state.start}
              running={this.state.running}
              startTimer={this.startTimer}
              pauseTimer = {this.pauseTimer}/>
      </div>
    );
  }
}

export default App;

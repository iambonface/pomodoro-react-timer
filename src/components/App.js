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
      setSession: 25,
      start:false,
      running: false,
      timer: 0,
      isSession: false,
      setBreak: 5,
      isBreak: false,
      playSound: false,
      startWork: 'http://soundbible.com/mp3/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3',
      startWorkPlaying: true
    }

    this.clickIncreaseSession = this.clickIncreaseSession.bind(this);
    this.clickDecreaseSession = this.clickDecreaseSession.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this)
    this.evalTime = this.evalTime.bind(this)


    this.clickIncreaseBreak = this.clickIncreaseBreak.bind(this);
    this.clickDecreaseBreak = this.clickDecreaseBreak.bind(this);
    this.startBreak = this.startBreak.bind(this)
    this.setStartSession = this.setStartSession.bind(this)

    this.playSound = this.playSound.bind(this)


  }

  playSound(){
    this.setState({
      playSound: true,
    })
    this.audio =  new Audio(this.state.startWork)
    this.audio.load()
    this.audio.volume = 0.4
    this.audio.play()
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

  setStartSession(){
    this.startTimer()
  }


  startTimer(){
    console.log(this.state.isSession)
    console.log(this.state.isBreak)
    /*this.setState({
      startWorkPlaying: true
    })
    if(this.state.playSound === true){
       this.audio.pause()
    }else if(this.state.startWorkPlaying === true) {
      this.startWork = new Audio(this.state.startWork)
      this.startWork.load()
      this.startWork.volume = 0.4
      this.startWork.play()
    }*/
    this.startWork = new Audio(this.state.startWork)
    this.startWork.load()
    this.startWork.volume = 0.4
    this.startWork.play()

    clearInterval(this.intervalId)
    this.setState({
        playSound: false,
        start: true,
        isBreak: false,
        isSession: true,
        timer: this.state.setSession * 60
    })

    /*if(this.state.playSound && this.state.start === true){
      let audio =  new Audio(this.state.songAlarm)
      audio.load()
      audio.volume = 0.5
      audio.play()
    }*/

   this.intervalId = setInterval(() => {
     this.evalTime()
       if(this.state.timer > 0){
         this.setState((prevState, props)=>{
         return {
           timer: prevState.timer - 1}
         })
       }
       if(this.state.timer === 0 && this.state.isBreak === false){
           this.startBreak()
           this.setState({
               isBreak: true
           })
       }

       if(this.state.timer === 0 && this.state.isBreak === true){
         this.setStartSession()
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


    startBreak(){
      this.playSound()
      this.setState({
          isBreak: true,
          timer: this.state.setBreak * 60
      })
      let hours = this.prefixZero(Math.floor(this.state.timer/60/60));
      let minutes = this.prefixZero(Math.floor(this.state.timer/60 % 60));
      let seconds = this.prefixZero(this.state.timer % 60);
      this.setState({
        hours:hours,
        minutes: minutes,
        seconds: seconds
      })

    }

    clickIncreaseBreak(){
      this.setState({
        isSession: true
      })
      this.setState((prevState, props)=>{
        return { setBreak: prevState.setBreak + 1}
      })
    }
    clickDecreaseBreak(){
      this.setState({
        isSession: true
      })
      if(this.state.setBreak > 0){
        this.setState((prevState, props)=>{
          return { setBreak: prevState.setBreak - 1}
        })
      }
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
                 isSession={this.state.isSession}

                 pauseTimer={this.pauseTimer}
                 start={this.state.start}
                 clickIncreaseSession={this.clickIncreaseSession}
                 clickDecreaseSession={this.clickDecreaseSession}

                 clickIncreaseBreak={this.clickIncreaseBreak}
                 clickDecreaseBreak={this.clickDecreaseBreak}
                 setBreak={this.state.setBreak}
                 isBreak={this.state.isBreak}/>
        <Wrap
              start={this.state.start}
              running={this.state.running}
              startTimer={this.startTimer}
              pauseTimer = {this.pauseTimer}
              isBreak={this.state.isBreak}
              />
      </div>
    );
  }
}

export default App;

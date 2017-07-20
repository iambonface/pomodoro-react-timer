
import React, { Component } from 'react';

import '../css/Timer.css'

class Timer extends Component {
  render() {
      const showTimer = this.props.showTimer;
      console.log("timer: " + this.props.showTimer)
      let showTimerProp = null;
      if(showTimer){
        showTimerProp = this.props.hours + ":" + this.props.minutes + ":" + this.props.seconds
      } else{
        showTimerProp = this.props.minutes + " min"
      }

      return (
        <div className="Timer">
            {showTimerProp}
        </div>
      );
    }
  }

export default Timer;

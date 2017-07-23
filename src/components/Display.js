import React, { Component } from 'react';

import '../css/Display.css';

class Display extends Component{
  render(){
    const showTimer = this.props.showTimer;
    let showTimerProps = null;
    if(showTimer){
      showTimerProps = this.props.hours + ":" + this.props.minutes + ":" + this.props.seconds
    } else{
      showTimerProps = this.props.setMoment + " Min"
    }
    return(
      <div className="Display">
        <div className="timer">
          {showTimerProps}
        </div>
      </div>
    )
  }
}

export default Display;

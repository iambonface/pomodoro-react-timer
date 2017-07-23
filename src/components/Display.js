import React, { Component } from 'react';

import '../css/Display.css';

class Display extends Component{
  render(){

    let showTimerProps = null;
    if(this.props.start){
      showTimerProps = this.props.hours + ":" + this.props.minutes + ":" + this.props.seconds
    } else{
      showTimerProps = this.props.setSession + " Min"
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

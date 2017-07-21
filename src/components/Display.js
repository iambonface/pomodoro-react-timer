import React, { Component } from 'react';

import '../css/Display.css';

class Display extends Component{
  render(){
    return(
      <div className="Display">
        <div className="timer">{this.props.minutes} Min</div>
      </div>
    )
  }
}

export default Display;

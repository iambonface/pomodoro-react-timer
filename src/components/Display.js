import React, { Component } from 'react';

import '../css/Display.css';

class Display extends Component{
  render(){

    let propEl = null;
    if(this.props.sessionClickIncrement){
      propEl = <div className="timer">{this.props.minutes} Min</div>
    }

    return(
      <div className="Display">
        {propEl}
      </div>
    )
  }
}

export default Display;

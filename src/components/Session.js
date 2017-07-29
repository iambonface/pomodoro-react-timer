import React, { Component } from 'react';

import '../css/Session.css';

class Session extends Component{
  render(){

    const start = this.props.start

    let buttonDecrement = null;
    let buttonIncrement = null;
    let buttonSession = null;

    if(!start){
      buttonDecrement = <button className="btn-min"
              onClick={this.props.clickDecreaseSession}>-</button>
      buttonIncrement = <button className="btn-min"
              onClick={this.props.clickIncreaseSession}>+</button>

      buttonSession = <button className="btn-min min">{this.props.setSession}</button>
    } else if(start || this.props.isRunning === false){
      buttonSession = <button className="btn-min btn-colored min">{this.props.setSession}</button>
    }


    return(
      <div className="Session col-md-6 col-sm-6 col-xs-6">
        <h4 className="text-center">Session</h4>
          <div className=" count text-center">
            {buttonDecrement}
            {buttonSession}
            {buttonIncrement}
          </div>

      </div>
    )
  }
}

export default Session;

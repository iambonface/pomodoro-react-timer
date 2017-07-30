import React, { Component } from 'react';

import '../css/SessionWrapper.css';
import Break from './Break';
import Session from './Session';

class SessionWrapper extends Component{
  render(){
    return(
      <div className="SessionWrapper col-md-12">
        <Session setSession={this.props.setSession}
                 start={this.props.start}
                 running={this.props.running}
                 clickIncreaseSession={this.props.clickIncreaseSession}
                 clickDecreaseSession={this.props.clickDecreaseSession}
                />

        <Break setBreak={this.props.setBreak}
               clickIncreaseBreak={this.props.clickIncreaseBreak}
               clickDecreaseBreak={this.props.clickDecreaseBreak}
               isSession={this.props.isSession}
               start={this.props.start}
               isBreak={this.props.isBreak}

              />
      </div>
    )
  }
}

export default SessionWrapper;

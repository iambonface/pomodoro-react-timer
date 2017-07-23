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
                 clickIncreaseSession={this.props.clickIncreaseSession}
                 clickDecreaseSession={this.props.clickDecreaseSession}

                />

        <Break breakMinutes={this.props.breakMinutes}
              />
      </div>
    )
  }
}

export default SessionWrapper;

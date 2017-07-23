import React, { Component } from 'react';

import '../css/SessionWrapper.css';
import Break from './Break';
import Session from './Session';

class SessionWrapper extends Component{
  render(){
    return(
      <div className="SessionWrapper col-md-12">
        <Session setMoment={this.props.setMoment}
                 clickIncreaseSession={this.props.clickIncreaseSession}

                />

        <Break breakMinutes={this.props.breakMinutes}
              />
      </div>
    )
  }
}

export default SessionWrapper;

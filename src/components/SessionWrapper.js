import React, { Component } from 'react';

import '../css/SessionWrapper.css';
import Break from './Break';
import Session from './Session';

class SessionWrapper extends Component{
  render(){
    return(
      <div className="SessionWrapper col-md-12">
        <Session minutes={this.props.minutes} />
        <Break />
      </div>
    )
  }
}

export default SessionWrapper;

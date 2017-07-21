import React, { Component } from 'react';

import '../css/Session.css';

class Session extends Component{
  render(){
    return(
      <div className="Session col-md-6 col-sm-6 col-xs-6">
        <h4 className="text-center">Session</h4>
          <div className=" count text-center">
            <button className="btn-min">-</button>
            <button className="btn-min min">{this.props.minutes}</button>
            <button className="btn-min">+</button>
          </div>

      </div>
    )
  }
}

export default Session;

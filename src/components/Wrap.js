import React, { Component } from 'react';

import '../css/Wrap.css';

class Wrap extends Component{
  render(){
    return(
      <div className="Wrap col-md-2 col-sm-4 col-xs-8">
        <i className="fa fa-play-circle" onClick={this.props.handleCountdown}></i>
        <i className="fa fa-pause-circle"></i>
        <i className="fa fa-refresh"></i>
      </div>
    )
  }
}

export default Wrap;

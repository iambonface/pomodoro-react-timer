import React, { Component } from 'react';

import '../css/Wrap.css';

class Wrap extends Component{
  render(){
    return(
      <div className="Wrap col-md-2 col-sm-4 col-xs-8">
        <button className="btn btn-success">Start</button>
        <button className="btn btn-danger">Pause</button>
        <button className="btn btn-warning">Reset</button>
      </div>
    )
  }
}

export default Wrap;

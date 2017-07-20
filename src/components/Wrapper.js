import React, { Component } from 'react';

import '../css/Wrapper.css';
import Display from './Display';

class Wrapper extends Component{
  render(){
    return(
      <div className="Wrapper col-md-3 col-sm-5 col-xs-10">
        <Display />
      </div>
    )
  }
}

export default Wrapper;

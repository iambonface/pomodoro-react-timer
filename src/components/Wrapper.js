import React, { Component } from 'react';

import '../css/Wrapper.css';
import Display from './Display';
import SessionWrapper from './SessionWrapper';
import Title from './Title';

class Wrapper extends Component{
  render(){
    return(
      <div className="Wrapper col-md-3 col-sm-5 col-xs-10">
        <Title />
        <Display minutes={this.props.minutes} />
        <SessionWrapper minutes={this.props.minutes}
                        breakMinutes={this.props.breakMinutes}
                        handleSessionIncrement={this.props.handleSessionIncrement}/>
      </div>
    )
  }
}

export default Wrapper;

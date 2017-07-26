import React, { Component } from 'react';

import '../css/Wrap.css';

class Wrap extends Component{
  render(){
    let buttonClick1 = null;
    let buttonClick2 = null;
    if(!this.props.start){
      buttonClick1 = <i className="fa fa-play-circle" onClick={this.props.startTimer}></i>
      buttonClick2 = <button className="btn btn-warning">Napping...</button>

    } else{
      buttonClick1 = <button className="btn btn-success">Working...</button>
      buttonClick2 = <i className="fa fa-pause-circle" onClick={this.props.pauseTimer}></i>
    }
    return(
      <div className="Wrap col-md-2 col-sm-4 col-xs-8">
        {buttonClick1}
        {buttonClick2}
        <i className="fa fa-refresh"></i>
      </div>
    )
  }
}

export default Wrap;

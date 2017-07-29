import React, { Component } from 'react';

import '../css/Break.css';

class Break extends Component{
  render(){
    const start = this.props.start

    let buttonDecrement = null;
    let buttonIncrement = null;
    let buttonBreak = null;

    if(!start){
      buttonDecrement = <button className="btn-min"
              onClick={this.props.clickDecreaseBreak}>-</button>
      buttonIncrement = <button className="btn-min"
              onClick={this.props.clickIncreaseBreak}>+</button>
      buttonBreak = <button className="btn-min min">{this.props.setBreak}</button>
    }
    else if(start && this.props.isBreak === true){
      buttonBreak = <button className="btn-min btn-colored-break min">{this.props.setBreak}</button>
    }


    return(
      <div className="Session col-md-6 col-sm-6 col-xs-6">
        <h4 className="text-center">Break</h4>
          <div className=" count text-center">
            {buttonDecrement}
            {buttonBreak}
            {buttonIncrement}
          </div>

      </div>
    )
  }
}

export default Break;

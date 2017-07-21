import React, { Component } from 'react';

import '../css/Break.css';

class Break extends Component{
  render(){
    return(
      <div className="Break col-md-6 col-sm-6 col-xs-6">
      <h4 className="text-center">Break</h4>
        <div className=" count text-center">
          <button className="btn-min">-</button>
          <button className="btn-min min">5</button>
          <button className="btn-min">+</button>
        </div>

      </div>
    )
  }
}

export default Break;

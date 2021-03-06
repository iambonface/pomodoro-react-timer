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
        <Display hours={this.props.hours}
                 minutes={this.props.minutes}
                 seconds={this.props.seconds}
                 setSession={this.props.setSession}
                 start={this.props.start}
                 running={this.props.running}
                 isBreak={this.props.isBreak}
                />

        <SessionWrapper setSession={this.props.setSession}
                        start={this.props.start}
                        running={this.props.running}
                        clickIncreaseSession={this.props.clickIncreaseSession}
                        clickDecreaseSession={this.props.clickDecreaseSession}
                        clickIncreaseBreak={this.props.clickIncreaseBreak}
                        clickDecreaseBreak={this.props.clickDecreaseBreak}
                        setBreak={this.props.setBreak}
                        isSession={this.props.isSession}
                        isBreak = {this.props.isBreak}/>

      </div>
    )
  }
}

export default Wrapper;

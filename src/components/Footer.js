import React, { Component } from 'react';

import '../css/Footer.css';

class Footer extends Component{
  render(){
    return(
      <div className="Footer col-md-12 col-sm-12 col-xs-12 text-center">
        <p>Built by Bonface Mudiri &copy;2017 <span className="col-md-12 col-sm-12  col-xs-12">
         Fork<i className="fa fa-github"></i> <a href="https://github.com/iambonface/pomodoro-react-timer" target ="_blank"
rel="nofollow noopener noreferrer">@iamBonface</a> || Follow<i className="fa fa-twitter"></i> <a href="https://www.twitter.com/iambonface" target ="_blank"
rel="nofollow noopener noreferrer">@iamBonface</a></span></p>
      </div>
    )
  }
}

export default Footer;

import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';

export default class Page2 extends React.Component {

  // ask for `router` from context
  static contextTypes = {
    router: React.PropTypes.object
  }

  handleGoToPage3(event) {
    // ...
    let path = '/page3'
    this.context.router.push(path)
  }

  handleGoToPage4(event) {
    // ...
    let path = '/page4'
    this.context.router.push(path)
  }

  render(){
    return (<div>
        <p>This is page2.</p>
        <button onClick={this.handleGoToPage3.bind(this)} >Go to Page3</button>
        <button onClick={this.handleGoToPage4.bind(this)} >Go to Page4</button>
    </div>);
  }
}

import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import { browserHistory } from "react-router";

export class Page1 extends React.Component {

  goToNextPage(){
    console.log('Page1 : Go to next page!');
    browserHistory.push('/page2');
  }

  render(){
    return (<div>
        <p>This is page1.</p>
        <button onClick={this.goToNextPage} >next page</button>
    </div>);
  }
}

import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import  './index.less';
import {View} from 'damo-core';
import Selector from './selector';
import {Custom} from './custom';
import {Page1} from './page1/page1'
import damo from 'damo-core';
import TestService from '../services/TestService';
import Page2 from './page2/page2';

@View({
    selector:Selector,
    providers:{testService:TestService}
})

export default class Root extends Component{

  static contextTypes = {
    testService: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    profile: {
      login: 'My First React App!!'
    }
  }

  constructor(props, context){
    super(props, context);
    this.state = {
      count: 1,
      color: 'blue'
    };
    this.callTestService = this.callTestService.bind(this);
//    this.context.testService.getUser().then(res => console.log(res));
    console.log(context);
  }

  componentWillMount(){
    this.props.getUser();
  }

  componentDidUpdate(){
//    console.log(this.props);
  }

  componentDidMount(){
    console.log("componentDidMount");
    this.timer = setInterval((() => {
      // this.state.count += 1;
      // this.forceUpdate();
      this.setState({count:(this.state.count+1)%100});
      // console.log("this.state.count = "+this.state.count);
    }).bind(this), 1000);
//    console.log(this.props);
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }

  callTestService(){
    console.log("callTestService");
    this.context.testService.getUser().then(res => console.log(res));
    //console.log(this.testService);
  }

  render(){
      return (<div>
              <h1 style={{color:this.state.color}}>Welcome to {this.props.profile.login} {this.state.count}</h1>
              <img src="/brand.png"/>
              <p><button onClick={this.callTestService}>callTestService</button></p>
              <Custom onBlabla={(e) => {this.setState({color:e.target.value})}}/>
              <Page1 />

                {this.props.children}

          </div>);
  }
}

// const viewComponent = damo.view(Selector, Root, {testService: TestService});
// export default viewComponent;


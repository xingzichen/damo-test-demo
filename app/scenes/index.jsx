import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import  './index.less';
import {View} from 'damo-core';
import Selector from './selector';
import {Custom} from './custom';
import damo from 'damo-core';
import TestService from '../services/TestService';

@View({
    selector:Selector,
    providers:{testService:TestService}
})

export default class Root extends Component{

  static contextTypes = {
    testService: React.PropTypes.object.isRequired
  }

  static propTypes = {
      title: PropTypes.string.isRequired
  }
  static defaultProps = {
      title: 'My new App!!'
  }

  constructor(props, context){
    super(props, context);
    this.state = {
      count: 1,
      color: 'blue'
    };
    console.log(context);
  }

  // componentWillUnmount(){
  //   console.log("componentWillUnmount");
  // }

  // componentDidUpdate(){
  //   console.log("componentDidUpdate");
  // }

  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  // componentWillUpdate(){
  //   console.log("componentWillUpdate");
  // }

  // componentWillReceiveProps(){
  //   console.log("componentWillReceiveProps");
  // }

  // componentWillReceiveProps(){
  //   console.log("componentWillReceiveProps");
  // }

  // componentWillMount(){
  //   console.log("componentWillMount");
  // }

  componentDidMount(){
    console.log("componentDidMount");
    this.timer = setInterval((() => {
      // this.state.count += 1;
      // this.forceUpdate();
      this.setState({count:(this.state.count+1)%100});
      // console.log("this.state.count = "+this.state.count);
    }).bind(this), 100);
  }

  callTestService(){
    console.log("callTestService");
  }

    // changeState = function* (){
    //   this.setState({count:5});
    //   yield 5;
    //   this.setState({count:3});
    //   yield 3;
    //   this.setState({count:4});
    //   yield 4;
    //   this.setState({count:2});
    //   return yield 2;
    // };

    render(){
        return (<div>
                <h1 style={{color:this.state.color}}>Welcome to {this.props.title} {this.state.count}</h1>
                <img src="/brand.png"/>
                <p><button onClick={this.callTestService}>callTestService</button></p>
                <Custom onBlabla={(e) => {this.setState({color:e.target.value})}}/>

            </div>)
    }
}

// const viewComponent = damo.view(Selector, Root, {testService: TestService});
// export default viewComponent;


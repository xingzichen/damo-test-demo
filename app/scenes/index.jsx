import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import  './index.less';
import {View} from 'damo-core';
import Selector from './selector';
import {Custom} from './custom';

@View({
    selector:Selector
})

export default class Root extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    static defaultProps = {
        title: 'My new App!!'
    }

    constructor(props){
      super(props);
      this.state = {
        count: 1,
        color: 'blue'
      };
    }

    componentDidMount(){
      this.timer = setInterval((() => {
        // this.state.count += 1;
        // this.forceUpdate();
        this.setState({count:(this.state.count+1)%100});
      }).bind(this), 100);
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
                <Custom onBlabla={(e) => {this.setState({color:e.target.value})}}/>
            </div>)
    }
}



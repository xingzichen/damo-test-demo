import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';

export class Custom extends Component{

  static defaultProps = {
    color:'red',
    onBlabla:(e,val)=>{}
  };

  constructor(props){
      super(props);
      this.state = {
          color: 'red',
          size:'32px'
      }
//      this.handleOnChange.bind(this);
  }

  handleOnChange(e){
    this.setState({color: e.target.value});
    let val = e.target.value;
    this.props.onBlabla && this.props.onBlabla(e,val);
//    this.props.color = e.target.value;
  }

  render(){
      return (<div>
          <input value={this.state.color} onChange={e=>this.handleOnChange(e)} />
          <br/>
          <input value={this.state.size} onChange={(e) => {this.setState({size: e.target.value});}} />
          <p style={{color: this.state.color, fontSize:this.state.size}}>Hello World</p>
      </div>);
  }
}

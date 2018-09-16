import React, { Component } from 'react';
import store from '../store.js'
import {connect} from 'react-redux'
//定义action
const add = ()=>{
    console.log("----action");
    return{
        type:'ADD'
    }
}
class App extends Component {
 addHandle(){
     //触发action
     store.dispatch(add())

 }

  render() {
    return (
      <div className="App">
       <h1>{this.props.count}</h1>
        <button onClick={
        this.addHandle.bind(this)
        }>click</button>
      </div>
    );
  }
}

const mapStateToprops = (state)=>{
    return{
        count:state.count
    }
}
export default connect(mapStateToprops)(App);

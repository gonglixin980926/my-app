import React, { Component } from 'react';
import store from '../store.js'
import {connect} from 'react-redux'
import action from './../action/ADD'
//定义action
// const add = ()=>{
//     console.log("----action");
//     return{
//         type:'ADD'
//     }
// }
const num = ()=>{
    return{
        type: 'ASD'
    }
}
class App extends Component {
 addHandle(){
     //触发action
     console.log(action.ADD);
     // store.dispatch(type)
     store.dispatch(num())

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

// const mapStateToprops = (state)=>{
const NewProps = (state)=>{
    return{
        count:state.count
    }
}
export default connect(NewProps)(App);

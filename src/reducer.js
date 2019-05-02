import { combineReducers } from "redux";


// countreducer
//count 是state中的属性

const count = (state=0,action)=>{
    console.log("count:"+state);
    console.log(state,action);
    switch (action.type){
        case 'ADD':
            return state+1;
        default :
            return state;
    }

}
const sum = (state=4,action)=>{
        console.log("sum:"+state);
        return state+1;

}
const reducer =  combineReducers({
    count,sum
})

export default reducer;
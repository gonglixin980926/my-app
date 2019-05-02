import {createStore} from "redux";
import reducer from './reducer'
const initialStates={count:0,sum:5}
//reducer state
const store = createStore(reducer,initialStates);

export default store;
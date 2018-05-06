import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from '../actions/index';

const initialState = {
  counter: 0
};

var counterReducer = function(state = initialState.counter, action){
  switch(action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootreducer from './combineReducer';
import App from './App';
const customLogger = function(store){
    return function (next){
      return function (action){
        console.log("%c Previous state:","color:green;", store.getState());
        console.log("%c Action:","color:red;", action);
        next(action);
        console.log("%c Next State:","color:blue;", store.getState());
        console.log("\n");
    }
  }
}

let store = createStore(
rootreducer,
applyMiddleware(thunkMiddleware, customLogger)
);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('app')
);
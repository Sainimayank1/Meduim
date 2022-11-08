import {createStore, applyMiddleware } from 'redux'

import {combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import authReducer from './reducer/authReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootreducer  = combineReducers(
    {
        authReducer
    }
);


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
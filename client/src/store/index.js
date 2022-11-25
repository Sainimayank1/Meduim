import {createStore, applyMiddleware } from 'redux'

import {combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import authReducer from './reducer/authReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import PostReducer from './reducer/PostReducer.jsx';

const rootreducer  = combineReducers(
    {
        authReducer,
        PostReducer,
    }
);


const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
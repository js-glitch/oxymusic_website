import {combineReducers} from 'redux'
import messageReducer from './messageReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer'

export default combineReducers(
    { 
        message : messageReducer,
        error : errorReducer,
        auth : authReducer
    }
);
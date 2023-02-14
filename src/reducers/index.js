import {combineReducers} from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';

export default combineReducers ({
    postReducer,
    userReducer,
    commentReducer
})
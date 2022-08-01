import { combineReducers } from "redux";
import todo from './todoReducer'
import user from './userReduser'


export default combineReducers({ todo, user});
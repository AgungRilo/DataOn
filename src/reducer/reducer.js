


import { combineReducers } from 'redux';
import yourReducer from './yourReducer';

const rootReducer = combineReducers({
 auth:yourReducer,
});


export default rootReducer;
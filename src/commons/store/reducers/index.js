import { combineReducers } from 'redux';
import { headers } from './headers';
import { user } from './user';

export default combineReducers({ user, headers });

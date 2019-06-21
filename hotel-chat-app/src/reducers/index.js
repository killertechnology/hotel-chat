/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';

import customers from '../reducers/reducer-get-customers';
import checkins from '../reducers/reducer-get-checkins';
import messages from '../reducers/reducer-get-messages';
import selectedMode from '../reducers/reducer-selectedMode';
import selectedGuestType from '../reducers/reducer-selectedGuestType';


const allReducers = combineReducers({
	customers,
	checkins,
	messages,
	selectedMode,
	selectedGuestType
}); 

export default allReducers;
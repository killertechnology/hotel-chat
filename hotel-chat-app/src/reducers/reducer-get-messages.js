

import * as ACTION_TYPES from '../actions/action_types'

export default function (state={},action) {
	
	switch(action.type) {
		case ACTION_TYPES.GET_MESSAGES:
			return action.payload
		default:
			return state
		
	} 

	return state;

}
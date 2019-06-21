

import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
	isAuthenticated:false
}

export default function (state={initialState},action) {
	switch(action.type) {
		case ACTION_TYPES.AUTHENTICATE_USER:
			return action.payload;
			default:
				return 'NONE';
		break;
		
	} 

	return state;

}
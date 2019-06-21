

import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
	selectedMode:'NONE'
}

export default function (state={},action) {
	switch(action.type) {
		case ACTION_TYPES.MODE_SELECTED:
			return action.payload;
			default:
				return state;
		break;
		
	} 

	return state;

}
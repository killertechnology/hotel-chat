

import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
	selectedMode:''
}

export default function (state={},action) {
	switch(action.type) {
		case ACTION_TYPES.GUEST_TYPE_SELECTED:
			return action.payload;
			default:
				return state;
		break;
		
	} 

	return state;

}
import * as ACTION_TYPES from './action_types'

export const selectGuestMode = (state) => {
	console.log("You selected 'Guest' mode");
	return {
		type: ACTION_TYPES.MODE_SELECTED,
		payload: 'GUEST'
	}
	
}
export const selectStaffMode = (state) => {
	console.log("You selected 'Staff' mode");
	return {
		type: ACTION_TYPES.MODE_SELECTED,
		payload: 'STAFF'
	}
	
}

export const users = (users) => {
	console.log("users read into view:");
	return {
		type: "USERS_ACCESSED",
		payload: users
	}

}

export const selectGuestsCheckedIn = (state) => {
	return {
		type: ACTION_TYPES.GUEST_TYPE_SELECTED,
		payload: 'CHECKED_IN'
	}
}
export const selectGuestsCheckedOut = (state) => {
	return {
		type: ACTION_TYPES.GUEST_TYPE_SELECTED,
		payload: 'CHECKED_OUT'
	}
}

export const guestCheckIn = (state) => {
	console.log("Checked In")
	return {
		type: ACTION_TYPES.GUEST_CHECKIN,
		payload: { 'checked-in': true }
	}
}

export const guestCheckOut = (state) => {
	console.log("Checked Out")
	return {
		type: ACTION_TYPES.GUEST_CHECKOUT,
		payload: { 'checked-in': false }
	}
	
}

export const getCustomersFromDb = (state,action) => {
	//console.log("Customers Loaded")
	return {
		type: ACTION_TYPES.GET_CUSTOMERS,
		payload: state
	}
	
}
export const getCheckInsFromDb = (state) => {
	//console.log("Checkins Loaded")
	return {
		type: ACTION_TYPES.GET_CHECKINS,
		payload: state
	}
	
}

export const getMessagesFromDb = (state) => {
	//console.log("Messages Loaded")
	return {
		type: ACTION_TYPES.GET_MESSAGES,
		payload: state
	}
	
}


export const authenticateUser = (state) => {
	console.log("You called the authentication function");
	return {
		type: ACTION_TYPES.AUTHENTICATE_USER,
		payload: 'PASSWORD'
	}
	
}



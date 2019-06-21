import React, { useState, createContext } from 'react';
import {getCustomersFromDb} from '../actions/actions'

export const Context = createContext();

export const HotelChatProvider = props => {


	//this.getCustomersFromDb();
	//const [guestsList,setGuestList] = useState(dtCustomers);
	const [guestsList,setGuestList] = useState([
		{
			id: 1,
			first: "BKevin",
			last: "Fessler",
			age: 77,
			description: "Kevin is a react developer",
			status: "checked-in",
			checkedIn: true		
		},{
			id: 2,
			first: "BBrian",
			last: "Williams",
			age: 21,
			description: "Brian is a Javascript developer",
			status: "n/a",
			checkedIn: true	
		},{
			id: 3,
			first: "BJosh",
			last: "Cryer",
			age: 71,
			description: "Josh is an accountant",
			status: "checked-out",
			checkedIn: false
		},{
			id: 4,
			first: "BBarry",
			last: "Woods",
			age: 21,
			description: "Barry is a basketball player",
			status: "checked-out",
			checkedIn: false
			
		},{
			id: 5,
			first: "BJennifer",
			last: "Smith",
			age:32,
			description: "Jennifer is a CEO",
			status: "checked-out",
			checkedIn: true
		}
	]);
	return <Context.Provider value={[guestsList,setGuestList]}>{props.children}</Context.Provider>;
}
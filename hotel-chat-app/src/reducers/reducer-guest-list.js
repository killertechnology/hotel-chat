


import React, {useState,useContext} from 'react'
import Guest from './guest'
import { Context }  from '../utils/context'

const GuestList = () => {
	
	const [guestsList,setGuestList] = useContext(Context);

	return(
		<div>This is the guest list:<br />
			<h1>{guestsList.map(guest => (
			<Guest guest={{guest}} />
		))}	</h1>
		</div>
	);
}

 

export default GuestList;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {guestCheckIn} from '../actions/actions'
import {guestCheckOut} from '../actions/actions'
import {bindActionCreators} from 'redux';
import MyCheckIns from '../components/guest-checkins';
import GuestChat from '../components/staff-guestMessages';
import {getCheckInsFromDb} from '../actions/actions'


import axios from 'axios';

class GuestPanel extends Component {
	constructor(props) {
	    super(props);
	}
	 
	doCustomerCheckIn = (cust_id, event_type) => {
		let checkinData = {"customer_id":cust_id,"type":event_type};
		fetch('http://ec2-18-236-147-223.us-west-2.compute.amazonaws.com:3001/api/createCheckIn', {
			method: 'POST',
			body: JSON.stringify(checkinData),
			headers:{'content-type': 'application/json'}
		})
		.then(function(response) {
			console.log("checkin created")
			return response.json();
		})
	};

	render() {
		
		if (!this.props.appMode){
			return (<h3>No Mode Selected</h3>)
		}

		if (this.props.appMode === 'GUEST'){
			return (
				<table border={1} width={'95%'} >
					<tbody>
					<tr>
						<td className='topalign' width={'15%'}>
							<div>
								<br />This is the Guest Panel<br />
								<button onClick={() => this.doCustomerCheckIn(4,"checked-in")}>Check In</button><br /><br />
								<button onClick={() => this.doCustomerCheckIn(4,"checked-out")}>Check Out</button><br /><br />
							</div>
						</td>
						<td className='topalign'>
							<MyCheckIns /><br />
							<hr />
							<GuestChat /><br />
				      	</td>
					</tr>
					</tbody>
				</table>
			)
		}
		else{
			return  (<div></div> )
		}
		
	}
}

function mapStateToProps(state){
 /**/
  return {
  	appMode : state.selectedMode,
  }
}

function mapDispatchToProps(dispatch){

  return bindActionCreators(
		{
			guestCheckIn: guestCheckIn,
			guestCheckOut: guestCheckOut
		},
		 dispatch
	)

}

export default connect(mapStateToProps,mapDispatchToProps)(GuestPanel);


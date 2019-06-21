import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as ACTION_TYPES from '../store/actions/action_types'
//import * as ACTIONS from '../store/actions/actions'
import StaffNavigation from '../components/staff-navigation'
import GuestsCheckedIn from '../components/staff-guestsIn'
import GuestsCheckedOut from '../components/staff-guestsOut'
import CheckIns from '../components/staff-checkins';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {getCustomersFromDb} from '../actions/actions'
import GuestChat from '../components/staff-guestMessages';
import {getCheckInsFromDb} from '../actions/actions'
import {selectGuestsCheckedIn} from '../actions/actions'

const styles = {
     'display': 'flex',
     'flexDirection': 'column', 
     'justifyContent': 'center'
};

class StaffPanel extends Component {
	constructor(props) {
	    super(props);
	}
	
	state = { }

	componentDidMount() {
		this.getCustomersFromDb();
		if (!this.state.intervalIsSet) {
				let interval = setInterval(this.getCustomersFromDb, 2000);
				this.setState({ intervalIsSet: interval });
		}
	}

	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	getCustomersFromDb = () => {
		if (this.props.appMode == "STAFF"){
			fetch('http://ec2-18-236-147-223.us-west-2.compute.amazonaws.com:3001/api/getCustomers')
		  .then((data) => data.json())
		  .then((res) => this.props.getCustomersFromDb(res.data));
		}
	};

	render() {
		
		if (!this.props.appMode){
			return (<h3>No Mode Selected</h3>)
		}

		if (this.props.appMode === 'STAFF'){
			return (
				<div>
					<br />This is the Staff Panel
					<table border={1} width={'95%'} >
					<tbody>
						<tr>
							<td className='topalign' width={'15%'}>
								<StaffNavigation /><br />
							</td>
							<td className='topalign' width={'50%'}>
								<div style={{"height":"160px"}}>
									<GuestsCheckedIn />
									<GuestsCheckedOut />
								</div>
								<hr />
								<GuestChat />
							</td>
							<td className='topalign'>
								<CheckIns /><br />
					      	</td>
					</tr>
					</tbody>
					</table>
				</div>
			)
		}

		return  (<div><br /></div> )
	}
}


function mapStateToProps(state){
  return {
  	appMode : state.selectedMode,
  	isAuthenticated : state.isAuthenticated,
  	customers : state.customers,
  	checkins: state.checkins,
  	messages: state.messages
  }
}

function mapDispatchToProps(dispatch){

	return bindActionCreators(
		{
			getCustomersFromDb: getCustomersFromDb,
			getCheckInsFromDb:getCheckInsFromDb,
			selectGuestsCheckedIn:selectGuestsCheckedIn,
		},
		 dispatch
	)
}

export default connect(mapStateToProps,mapDispatchToProps)(StaffPanel);


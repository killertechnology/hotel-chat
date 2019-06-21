
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as ACTION_TYPES from '../store/actions/action_types'
//import * as ACTIONS from '../store/actions/actions'
import {bindActionCreators} from 'redux';
import {selectGuestsCheckedIn} from '../actions/actions'
import {selectGuestsCheckedOut} from '../actions/actions'

class StaffNavigation extends Component {
	constructor(props) {
	    super(props);
	}
	 
	render() {
		
		return (
			<div>
			
				<button onClick={() => this.props.selectGuestsCheckedIn()}>Checked In</button><br />
				<button onClick={() => this.props.selectGuestsCheckedOut()}>Checked Out</button>
			</div>
		)
	}
}

function mapStateToProps(state){
 
  return {
   /* stateProp1: state.rootReducer.stateProp1,
    count: state.count*/
  }


}

function mapDispatchToProps(dispatch){

	return bindActionCreators(
		{
			selectGuestsCheckedIn: selectGuestsCheckedIn,
			selectGuestsCheckedOut: selectGuestsCheckedOut,
		},
		 dispatch
	)
}


export default connect(mapStateToProps,mapDispatchToProps)(StaffNavigation);


import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as ACTION_TYPES from '../store/actions/action_types'
//import * as ACTIONS from '../store/actions/actions'
import {bindActionCreators} from 'redux';
import {selectGuestMode} from '../actions/actions'
import {selectStaffMode} from '../actions/actions'

class Login extends Component {
	constructor(props) {
	    super(props);
	}
	 
	render() {

		if ((!this.props.appMode[0])){
			
			return (
				<div>
					
					This is the login page.<br />
					<br />
					<b>I am here as a:</b><br />
					<button onClick={() => this.props.selectGuestMode()}>Guest</button>&nbsp;&nbsp;
					<button onClick={() => this.props.selectStaffMode()}>Staff</button>
				</div>
			)
		}
		else{
			return  (<div></div> )
		}


	}
}

function mapStateToProps(state){
 
  return {
   appMode : state.selectedMode,
  }


}

function mapDispatchToProps(dispatch){

	return bindActionCreators(
		{
			selectGuestMode: selectGuestMode,
			selectStaffMode: selectStaffMode,
		},
		 dispatch
	)
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);


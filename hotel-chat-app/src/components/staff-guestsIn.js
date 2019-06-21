import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class GuestsCheckedIn extends Component {

	createListItems(){
		var checkedOut = [], checkedIn = [];
		var custList = this.props.customers;
		if (custList!=null){
			custList.forEach(function (customer) {
				if (customer.checkedIn) { 
					checkedIn.push(customer);
				}
			});
		}
		
		return checkedIn.map((customer) => {
			return (<li key={customer.id} >{customer.first} {customer.last}</li>)
		});
	}

	render() {
		if ((!this.props.guest_type) || (this.props.guest_type =="N/A") ||  (this.props.guest_type =="CHECKED_OUT")){
			return (<div></div>)
		}
		else if (this.props.guest_type == "CHECKED_IN"){
			return (
				<div>
					<b>Guests currently checked-in</b>
					<ul>{this.createListItems()}</ul>
				</div>
			);
		}
		else{
			return (<div></div>)
		}
	}
}

function mapStateToProps(state) {
	return {
		customers: state.customers,
		guest_type : state.selectedGuestType
	}
}

export default connect(mapStateToProps, null)(GuestsCheckedIn);
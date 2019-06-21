import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class GuestsCheckedOut extends Component {

	createListItems(){
		var checkedOut = [], checkedIn = [];

		var custList = this.props.customers;
		if (custList!=null){
			custList.forEach(function (customer) {
			if (customer.checkedIn) { 
				checkedIn.push(customer);
			} else {
				checkedOut.push(customer);
			}
			});
		}
		
		
		return checkedOut.map((customer) => {
			return (
				<li key={customer.id} >{customer.first} {customer.last}</li>
			)
		});
	}

	render() {
		if ((!this.props.guest_type) || (this.props.guest_type =="N/A") ||  (this.props.guest_type =="CHECKED_IN")){
			return (<div></div>)
		}
		else if (this.props.guest_type == "CHECKED_OUT"){
			return (
				<div>
					<b>Guests currently checked-out</b>
					<ul>
						{this.createListItems()}
					</ul>
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

export default connect(mapStateToProps, null)(GuestsCheckedOut);
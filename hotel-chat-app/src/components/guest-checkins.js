import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class GuestCheckins extends Component {

  createListItems(){
    var checkedOut = [], checkedIn = [];
    var checkinList = this.props.checkins;
    if (checkinList){
      if (checkinList.length){
        checkinList.forEach(function (customer) {
        if (customer.type=="checked-in") { 
          checkedIn.push(customer);
        } else {
          checkedOut.push(customer);
        }
        });
      }
    }
    
    if (checkinList){
       if (checkinList.length){
        return checkinList.map((customer) => {
          return (
            <div key={customer._id} >{customer.type} {customer.date_created}</div>
          )
        });
      }
    }
  }

  render() {
      return (
        <div>
          <b>My Previous Visits</b>
            {this.createListItems()}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    checkins: state.checkins,
    guest_type : state.selectedGuestType
  }
}

export default connect(mapStateToProps, null)(GuestCheckins);
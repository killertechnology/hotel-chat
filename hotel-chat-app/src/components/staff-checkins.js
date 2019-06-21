import React, { Component } from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Moment from 'moment';
import {getCheckInsFromDb} from '../actions/actions'
import {bindActionCreators} from 'redux';

class Checkins extends Component {

  state = { }

  componentDidMount() {
    
    this.getCheckInsFromDb();
    if (!this.state.intervalIsSet) {
        let interval1 = setInterval(this.getCheckInsFromDb, 2000);
        this.setState({ intervalIsSet: interval1 });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
 
  mergeCustomerCheckins = () => {
    console.log('merging')

  };

  getCheckInsFromDb = () => {
    if (this.props.appMode.length){
      fetch('http://ec2-18-236-147-223.us-west-2.compute.amazonaws.com:3001/api/getCheckIns')
      .then((data) => data.json())
      .then((res) => { this.props.getCheckInsFromDb(res.data); })
    }
    
  };

  createListItems(){
    var checkInCustdata = [], checkedIn = [];

    const checkinList = this.props.checkins;
    let CustList = this.props.customers;
    
    if (checkinList){
        if (checkinList.length){
          checkinList.forEach(function (checkin) {
            
            if (CustList){
              if (CustList.length){
                CustList.forEach(function (customer) {
                    if (customer.id == checkin.customer_id) { 
                     let _currCust = { _id: checkin._id, customer_id: checkin.customer_id, type: checkin.type, first: customer.first, last: customer.last, createdAt: checkin.createdAt };
                      checkInCustdata.push(_currCust);
                    } 
                });
              }
            }

        });
        
        if (checkInCustdata.length){

          return checkInCustdata.map((thisCheckin) => {

            return (
              <div key={thisCheckin._id} ><br/>
                <b>{Moment(thisCheckin.createdAt).format('MM-DD-YYYY')} - Customer# {thisCheckin.customer_id}</b><br />
                {thisCheckin.first}&nbsp;{thisCheckin.last}&nbsp;
                {thisCheckin.type} at {Moment(thisCheckin.createdAt).format('MM-DD-YYYY H:mm:ss')}
               
              </div>
            )
          });
        }
        }
      }
      
      return (
        <div></div>
        );
    }

  render() {

      return (
        <div>
          <b>Recent Customer Events</b>
            {this.createListItems()}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    checkins: state.checkins,
    customers: state.customers,
    guest_type : state.selectedGuestType,
    appMode: state.selectedMode
  }
}


function mapDispatchToProps(dispatch){

  return bindActionCreators(
    {
      getCheckInsFromDb:getCheckInsFromDb,
    },
     dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkins);
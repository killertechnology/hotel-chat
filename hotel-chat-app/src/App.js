import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import allReducers from './reducers';  /**/

import Login from './containers/login'
import GuestPanel from './containers/guest-panel'
import StaffPanel from './containers/staff-panel'
import GuestList from './reducers/reducer-guest-list'
import { HotelChatProvider } from './utils/context' 

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {

    return (
      <HotelChatProvider>
        <div id="wrapper">
            <div align="left">
                <br />
                <br />
                <Login />
                <GuestPanel />
                <StaffPanel />
            </div>
        </div>
      </HotelChatProvider>
    );
  }
}


export default App;





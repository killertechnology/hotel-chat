import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getMessagesFromDb} from '../actions/actions'

class GuestMessages extends Component {
 
 	state = { }
 	handleChange(){ }

	componentDidMount() {
		
		if (this.props.appMode.length){
			this.getMessagesFromDb();
			if (!this.state.intervalIsSet) {
					let interval1 = setInterval(this.getMessagesFromDb, 2000);
					this.setState({ intervalIsSet: interval1 });
			}
		}
	}

	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	getMessagesFromDb = () => {
		if (this.props.appMode.length){
			
		fetch('http://ec2-18-236-147-223.us-west-2.compute.amazonaws.com:3001/api/getMessages')
		  .then((data) => data.json())
		  .then((res) => { this.props.getMessagesFromDb(res.data); })
		}
	};

	doChatMessage = (objChatMsg) => {
		let cust_id = 3;
		let messageText = objChatMsg.refs.txtMessage.value;
		let messageData = {"customer_id":cust_id,"message":messageText} 

		fetch('http://ec2-18-236-147-223.us-west-2.compute.amazonaws.com:3001/api/createMessage', {
			method: 'POST',
			body: JSON.stringify(messageData),
			headers:{'content-type': 'application/json'}
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log("message created")
			objChatMsg.refs.txtMessage.value = '';
		});
	};


 	createMessageTrail(){
    	
    	var messagesOut = '';
    	const messageList = this.props.messages;
    	
    	if (messageList){
    		if (messageList.length){
	    			messageList.forEach(function (thisMessage) {
		    		messagesOut += thisMessage.message + "\r\n\r\n";
	    		});
    		}
    	}
    
        return (
          <div ><br/>
            <p>Recent Messages:<br />
				<textarea style={{"height":"300px", "width":"500px"}} value={messagesOut} onChange={this.handleChange} />
			</p>
           <div style={{ padding: '10px' }}>
			  <input type="text"  ref="txtMessage" id="txtMessage" placeholder="What are the office night hours?"  style={{ width: '300px' }} />
			  &nbsp;&nbsp;<button onClick={() => this.doChatMessage(this)}>Add Message</button><br />
			</div>
          </div>
	    )
	}
 
 	render() {

  		if (this.props.appMode.length){
  			return (
				<div>
					<b>This is the most recent messages</b>
					{this.createMessageTrail()}
				</div>
			);
  		}

  		return (<div></div>)
	}
}

function mapStateToProps(state) {
  return {
    checkins: state.checkins,
    customers: state.customers,
    messages: state.messages,
    appMode : state.selectedMode,
  }
}

function mapDispatchToProps(dispatch){

	return bindActionCreators(
		{
			getMessagesFromDb:getMessagesFromDb,
		},
		 dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestMessages);
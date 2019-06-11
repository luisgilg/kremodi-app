import { withSnackbar } from 'notistack';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Snackbar extends Component {
	constructor(props){
		super(props);
		this.state ={
			lastMessage: {
				id:0,
				message: ''
			}
		}
	}

	componentWillReceiveProps(nextProp){
		if (nextProp.message && nextProp.message.id){
			if (this.state.lastMessage.id !== nextProp.message.id){
				this.setState({
					lastMessage: nextProp.message
				});
				this.props.enqueueSnackbar(nextProp.message.message);
			}
		}
	}

	render(){
		return (
			<div/>
		);
	}
}

const mapStateToProps = ({snackReducer:{id, message}})=>({
  message: {
		id, message
	}
})

export default connect(mapStateToProps)(withSnackbar(Snackbar));
import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onlyAdmin } from '../utils';

class ScreenOpenShop extends Component {

	render(){
		return (
		<Container>
		</Container>
		)
	}
}

const mapStateToProps = ()=>({  

})
const mapDispatchToProps = (dispatch)=>({

})

export default onlyAdmin(connect(mapStateToProps, mapDispatchToProps)(ScreenOpenShop));
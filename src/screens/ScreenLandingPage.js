import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import CurrentOpenShop from '../components/shop/CurrentOpenShop';

class ScreenLandingPage extends Component {

	render(){
		return (
		<Container>
			<CurrentOpenShop />
		</Container>
		)
	}
}

export default ScreenLandingPage;
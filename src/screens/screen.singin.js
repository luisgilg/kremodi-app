import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { googleLogin, facebookLogin  } from '../actions/action.user';
import { isSignedin } from '../actions/utils'
import SocialMedia from '../components/user/component.social-media';
import {AppRoutes} from '../app.routes';

class ScreenSingin extends Component {

	googleLogin = () => {
		this.props.googleLogin();
	}

	instagramLogin = () => {
		this.props.googleLogin();
	}

	facebookLogin = () => {
		this.props.facebookLogin();
	}

	render() {
		if (isSignedin(this.props)){
			return (
				<Redirect to={AppRoutes.landing} />
			)
		}
		return (
			<SocialMedia
				header= {'¿Con que red social deseas iniciar sesión?'}
				facebook = {this.facebookLogin}
				instagram = {this.instagramLogin}
				google = {this.googleLogin}
			/>
		)
	}
}

const mapStateToProps = ({user})=>({
  user
})

const mapDispatchToProps = (dispatch)=>({
	googleLogin: () => dispatch(googleLogin()),
	facebookLogin: () => dispatch(facebookLogin())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenSingin);
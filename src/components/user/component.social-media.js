import React, { Component } from 'react';
import { Container, Grid, Paper, Box } from '@material-ui/core';
import { FacebookLoginButton, InstagramLoginButton, GoogleLoginButton } from "react-social-login-buttons";


class SocialMedia extends Component {

	renderLoginOptions = () => {

		return (
			<Paper>
				<Box textAlign="center" className="p-4">
					<Grid container direction="column" alignContent="center" spacing={2}>
						<Grid item xs={6} >
							<h5>
								{this.props.header}
							</h5>
						</Grid>
						<Grid item xs={6}>
							<FacebookLoginButton onClick={()=>this.props.facebook()} >
								<span>Facebook</span>
							</FacebookLoginButton>
						</Grid>

						<Grid item xs={6}>
							<InstagramLoginButton onClick={()=>this.props.instagram()}>
								<span>Instagram</span>
							</InstagramLoginButton>
						</Grid>

						<Grid item xs={6}>
							<GoogleLoginButton onClick={()=>this.props.google()}>
								<span>Google</span>
							</GoogleLoginButton>
						</Grid>
					</Grid>
				</Box>
			</Paper>
		)
	};

	render() {
		return (
			<Container>
				{this.renderLoginOptions()}
			</Container>
		)
	}
}

export default SocialMedia;
import React from 'react';
import { Box, Typography, Grid, Container } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
// import { makeStyles } from '@material-ui/core/styles';

class Footer extends React.Component {
	useStyles = () => (
		{
			socialIcon: 'mr-2 d-inline'
		}
	);

	render() {
		const classes = this.useStyles();

		return (
			<Container className='mt-4'>
				<Grid container>
					<Grid item xs={6}>
						<Box>
							<Typography gutterBottom variant="body2" component="b">
								Yogurt Kremodi 2019
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Todo los derechos reservados
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Box textAlign='right'>
							
							<ul>
								<li className={classes.socialIcon}>
								<Typography style={classes.socialList} variant="body2" color="textSecondary" component="span">
									Seguinos en las redes sociales
								</Typography>
								</li>
								<li className={classes.socialIcon}>
									<SocialIcon url='https://www.instagram.com/yogurt_mdq' />
								</li>
								<li className={classes.socialIcon}>
									<SocialIcon url='https://www.facebook.com/yogurtmdq/' />
								</li>
							</ul>
						</Box>
					</Grid>
				</Grid>
			</Container>
		)
	}
}

export default Footer;
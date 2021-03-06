import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

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
					<Grid item xs={12} sm={4} md={6}>
						<Box>
							<Typography gutterBottom variant="body2" component="b">
								Yogurt Kremódi 2019
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Todo los derechos reservados
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={8} md={6}>
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
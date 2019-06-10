import React, { Component } from 'react';
import { Avatar, Typography, Box, Grid, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

class ProductCard extends Component {

	render(){
		const classes = this.useStyles();

		const { product: {
			id,
			title,
			subtitle,
			image,
			available,
			total,
			description,
			avatar,
			avatarTitle,
			price
			}
		} = this.props;

		return (
			<Card key={id}>
				<CardHeader
					title={title}
					subheader={subtitle}
					avatar={avatar && (
						<Avatar title={avatarTitle} style={classes.bigAvatar} aria-label="Recipe">
							{avatar}
						</Avatar>)
					}
				/>
				<CardMedia
					component="img"
					image={image}
					title='Product photo'
				/>
				<CardContent>
					<Typography component="p">
						{description}
					</Typography>

					<Grid container>
						<Grid item xs={4}>
							<Box textAlign='left'>
								<Typography component="p">
									<strong>{price}$</strong>
								</Typography>
							</Box>
						</Grid>
						{total >=0 && available >=0 && (
							<Grid item xs={8}>
								<Box textAlign='right'>
									<Typography component="p">
										quedan <strong>{available}</strong> de <strong>{total}</strong>
									</Typography>
								</Box>
							</Grid>
						)}					
					</Grid>
				</CardContent>
			</Card>
		);
	}

	useStyles = () => (
		{
			headerDate: 'm-2',
			header: 'm-4',
			bigAvatar: {
				color: '#fff',
				backgroundColor: deepOrange[500],
			},
			orangeAvatar: {
				margin: 10,
				color: '#fff',
				backgroundColor: deepOrange[500],
			},
		}
	);

}

export default ProductCard;
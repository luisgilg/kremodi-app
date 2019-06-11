import React, { Component } from 'react';
import { Avatar, Typography, Box, Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Edit } from '@material-ui/icons';


class ProductCard extends Component {

	render(){
		const classes = this.useStyles();

		const { 
			product: {
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
			},
			product,
			allowEdit=false,
			editAction= ()=>{}
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
				{allowEdit && (
					<CardActions>
						<Button color="primary" onClick={()=>editAction({product})}>
							<Edit />
							<span className={classes.editButton}>Editar</span>
						</Button>
					</CardActions>
				)}
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
			editButton: 'ml-2 mr-2',

		}
	);

}

export default ProductCard;
import { Box, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { ShoppingBasket } from '@material-ui/icons';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../app.routes';
import ManageOpenShopCard from './component.manage-open-shop-card';


class CurrentOpenShop extends Component {

	
	render() {
		const openSale = this.getMockedOpenSale();
		const products = this.getMockedProducts();
		const openShop = {...openSale, products};
		return (
			<div>
				<Container>
					{/* <Paper> */}
						<ManageOpenShopCard
							openShop = {openShop}
						/>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Box className='m-4' textAlign='center'>
									<Typography>
										Hacé tu pedido ya, ¡antes que se agoten!
									</Typography>
								</Box>
								<Box className='m-2' textAlign='center'>									
									<Link to={AppRoutes.shop}>
										<Button variant="contained" color="primary">
											<ShoppingBasket />
											<span className="ml-2">Hacer pedido</span>
										</Button>										
									</Link>
								</Box>
							</Grid>
						</Grid>
					{/* </Paper> */}
				</Container>
			</div>
		)
	}

	useStyles = () => (
		{
			headerDate: 'm-2',
			header: 'm-4',
			bigAvatar: {
				// width: 60,
				// height: 60,
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

	getMockedOpenSale = () => ({
		title: 'Productos disponibles',
		subtitle: 'Especial primavera'
	});
	getMockedProducts = () => ([
		{
			id: 1,
			title: 'Yogurt Griego',
			subtitle: 'Natural',
			image: '/images/griego-test.jpg',
			available: 5,
			total: 10,
			description: 'Super cremoso, sin azucar ni aditivos, ideal para cocinar, etc...',
			price: 55
		},
		{
			id: 2,
			title: 'Yogurt G. Con Mango',
			subtitle: 'Natural con tozos de fruta',
			image: '/images/griego-test.jpg',
			available: 5,
			total: 10,
			description: 'El mismo Yogurt Griego Natural con trozos de frutas',
			price: 65
			// avatar:'YG',
			// avatarTitle: 'Yogurt Grigo'
		},
		{
			id: 3,
			title: 'Yogurt G. Frutilla',
			subtitle: 'Natural con tozos de fruta',
			image: '/images/griego-test.jpg',
			available: 5,
			total: 10,
			description: 'El mismo Yogurt Griego Natural con trozos de frutas',
			price: 65

		},
		{
			id: 4,
			title: 'Yogurt G. c/Mermelada de Durazno',
			subtitle: 'Natural con mermelada casera',
			image: '/images/griego-test.jpg',
			available: 5,
			total: 10,
			price: 65

		},
		{
			id: 5,
			title: 'Yogurt Griego',
			subtitle: 'Sin azucar ni aditivos',
			image: '/images/griego-test.jpg',
			available: 5,
			total: 10,
			price: 65

		}
	])
}

export default CurrentOpenShop;
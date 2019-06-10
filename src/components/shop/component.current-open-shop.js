import React, { Component } from 'react';
import { Typography, Container, Box, Button, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { deepOrange } from '@material-ui/core/colors';
import { ShoppingBasket} from '@material-ui/icons';

import {AppRoutes} from '../../app.routes';
import ProductCard from './component.product-card';

class CurrentOpenShop extends Component {

	renderProductCard = ({product}) => (
		<ProductCard product={product} />
	)

	renderProductGridItem = ({ product, ...args }) => (
		<Grid key={product.id} item xs={12} sm={6} md={3} >
			{this.renderProductCard({ product, ...args })}
		</Grid>
	)

	renderOpenSaleHeader = ({ openSale: {
		title,
		startDate,
		endDate,
		subtitle
	}, classes }) => (
			<Box textAlign="center" className={classes.header}>
				<Typography variant="h6" component="span">
					{title}
				</Typography>
				<Typography className={classes.headerDate} variant="h5" component="span">
					{startDate}
				</Typography>
				<Typography variant="h6" component="span">
					hasta
				</Typography>
				<Typography className={classes.headerDate} variant="h5" component="span">
					{endDate}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{subtitle}
				</Typography>
			</Box>
		);

	render() {
		const classes = this.useStyles();
		const openSale = this.getMockedOpenSale();
		const products = this.getMockedProducts();

		return (
			<div>
				<Container>
					<Paper>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								{this.renderOpenSaleHeader({openSale, classes})}
							</Grid>
						</Grid>
						<Grid className='pl-2 pr-2' container spacing={2}>
							{products && products.map(product => this.renderProductGridItem({ product, classes }))}
						</Grid>
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
					</Paper>
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
		title: 'Productos disponibles desde',
		startDate: 'Abr 20, 2019',
		endDate: 'Abr 25, 2019',
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
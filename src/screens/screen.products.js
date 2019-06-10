import React, { Component } from 'react';
import { Container, Paper, Grid, Fab, Box } from '@material-ui/core';
import ProductCard from '../components/shop/component.product-card';
import ProductForm from '../components/shop/component.product-form';

import { Add as AddIcon} from '@material-ui/icons';
import { Alert } from 'reactstrap'

class ScreenProducts extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: false
		};
	}
	renderProductCard = ({product}) => (
		<ProductCard product={product} />
	)

	renderProductGridItem = ({ product, ...args }) => (
		<Grid key={product.id} item xs={12} sm={3} md={3} >
			{this.renderProductCard({ product, ...args })}
		</Grid>
	)

	toggleProductForm = ()=> this.setState(({open}) => ({open: !open}))

	render(){
		const classes = this.useStyles();
		const {products} = this.props;
		const {open} = this.state;

		return (
			<Container>
				<Paper className={classes.container}>
					<Grid container>
						<Grid className={classes.productRow} container>
								{products && products.map(product => this.renderProductGridItem({ product, classes }))}
								{!products && (
									<Grid item xs={12} className={classes.empty}>
											<Alert color="danger" className={classes.empty}>
												No hay productos registrados
											</Alert>
									</Grid>								
								)}
						</Grid>
						<Grid item xs={12}>
							<Box textAlign='right'>
								<Fab className={classes.button} onClick= {this.toggleProductForm} color="primary" aria-label="Add">
									<AddIcon />
								</Fab>
							</Box>
						</Grid>
					</Grid>
				</Paper>
				<ProductForm
					open={open}
					toggle={this.toggleProductForm}
				/>	
			</Container>
		)
	}

	useStyles = () => (
		{
			headerDate: 'm-2',
			header: 'm-4',
			productRow:'pl-2 pr-2',
			empty: 'm-8 p-8',
			button: '',
			container: 'p-4'
		}
	);
}

export default ScreenProducts;
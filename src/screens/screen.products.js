import { Box, Container, Fab, Grid, Paper } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { fetchProducts, pushProducts, updateProducts } from '../actions/action.products';
import ProductCard from '../components/shop/component.product-card';
import ProductForm from '../components/shop/component.product-form';
import { createProduct, onlyAdmin } from '../utils';

class ScreenProducts extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: false,
			product: null,
			action: ()=>{}
		};
	}

	toggleProductForm = ()=> this.setState(({open}) => ({open: !open}))

	addProductForm = ()=> this.setState(({open}) => ({
		open: !open,
		product: createProduct(),
		action: this.save
	}))

	editProductForm = ({product})=> this.setState(({open}) => ({
		open: !open,
		product,
		action: this.edit
	}))

	save= ({product: originalProduct}, {product: newProduct})=>{
		const product = {...originalProduct, ...newProduct};
		this.props.pushProducts({product});
		this.toggleProductForm();
	}

	edit= ({product: {id}}, {product: newProduct})=>{
		const product = {id, ...newProduct};
		this.props.updateProducts({product});
		this.toggleProductForm();
	}

	update= ()=>{}

	renderProductCard = ({product}) => (
		<ProductCard 
			product={product}
			allowEdit={true}
			editAction={this.editProductForm}
		/>
	)

	renderProductGridItem = ({ product, ...args }) => (
		<Grid key={product.id} item xs={12} sm={3} md={3}>
			{this.renderProductCard({ product, ...args })}
		</Grid>
	)
	render(){
		const classes = this.useStyles();
		const {products} = this.props;
		const {open, action, product} = this.state;

		return (
			<Container>
				<Paper className={classes.container}>
					<Grid container>
						<Grid className={classes.productRow} container spacing={2}>
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
								<Fab className={classes.button} onClick= {this.addProductForm} color="primary" aria-label="Add">
									<AddIcon />
								</Fab>
							</Box>
						</Grid>
					</Grid>
				</Paper>
				<ProductForm
					open={open}
					toggle={this.toggleProductForm}
					product={product}
				  action={action}
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

	componentDidMount(){
		this.props.fetchProducts();
	}
}


const mapStateToProps = ({productsReducer:{products}})=>({
  products
})

const mapDispatchToProps = (dispatch)=>({
	fetchProducts: () => dispatch(fetchProducts()),
	pushProducts: (...args) => dispatch(pushProducts(...args)),
	updateProducts: (...args) => dispatch(updateProducts(...args))
})

export default onlyAdmin(connect(mapStateToProps, mapDispatchToProps)(ScreenProducts));
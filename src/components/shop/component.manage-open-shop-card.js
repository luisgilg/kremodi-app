import { Container, Card, CardHeader, CardContent, CardActions, Button, Table, TableHead, TableCell, TableBody, TableRow, Grid,Switch, Typography  } from '@material-ui/core';
import React, { Component } from 'react';
import { Edit } from '@material-ui/icons';
import moment from 'moment';
import ProductCard from './component.product-card';


class ManageOpenShopCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			isPreview:false
		}
	}
	renderProductCard = ({product}) => (
		<ProductCard 
			product={product}
		/>
	)

	renderProductGridItem = ({ product, ...args }) => (
		<Grid key={product.productId || product.id} item xs={12} sm={4} md={4}>
			{this.renderProductCard({ product, ...args })}
		</Grid>
	)

	render(){
		const classes = this.useStyles();

		const {
			openShop: { id, title, subtitle, products = [], startDate = moment().format('YYYY-MM-DD'), endDate = moment().add(5,'days').format('YYYY-MM-DD')
			},
			openShop,
			allowEdit=false,
			editAction= ()=>{}
		} = this.props;
		const fechaDesde = moment(startDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
		const fechaHasta = moment(endDate, 'YYYY-MM-DD').format('MMM DD, YYYY');
		return (
		// <Container>
			<Card>
				<CardHeader
					title={title}
					subheader={subtitle}
				/>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={6}>							
							<Typography variant="body2" color="textSecondary" component="p">
								Inicia
							</Typography>
							<Typography gutterBottom variant="h6" component="h6">
								{fechaDesde}
							</Typography>
						</Grid>
						<Grid item xs={6}>							
							<Typography variant="body2" color="textSecondary" component="p">
								Termina
							</Typography>
							<Typography gutterBottom variant="h6" component="h6">
								{fechaHasta}
							</Typography>
						</Grid>
						{/* <Grid item xs={4}> */}
							{/* {allowEdit && (
								<Switch
									checked={this.state.isPreview}
									value= 'isPreview'
									onChange={({target}) => this.setState({
										isPreview: target.checked
									})}
									inputProps={{ 'aria-label': 'secondary checkbox' }}
								/>
							)} */}
						{/* </Grid> */}
					</Grid>
					{(allowEdit && !this.state.isPreview ) && (
						<Table>
							<TableHead>
								<TableRow>
									{/* <TableCell></TableCell> */}
									<TableCell>Producto</TableCell>
									<TableCell align="right">Disponible</TableCell>
									<TableCell align="right">Total</TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{products && products.map(product=>(
									<TableRow key={product.productId}>
										{/* <TableCell>
											<img style={classes.image} src={product.image} />
										</TableCell> */}
										<TableCell>
											{product.title}
										</TableCell>
										<TableCell align="right">{product.available}</TableCell>
										<TableCell align="right">{product.total}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)}
					{( (allowEdit && this.state.isPreview )  || !allowEdit) && (
						<Grid container>
							<Grid className={classes.productRow} container spacing={2}>
									{products && products.map(product => this.renderProductGridItem({ product, classes }))}
							</Grid>
						</Grid>
					)}
				</CardContent>
				{allowEdit && (
					<CardActions>
						<Button color="primary" onClick={()=>editAction({openShop})}>
							<Edit />
							<span className={classes.editButton}>Editar</span>
						</Button>
					</CardActions>
				)}
			</Card>
			
		// </Container>
		)
	}

	useStyles = () => (
		{
			headerDate: 'm-2',
			header: 'm-4',
			editButton: 'ml-2 mr-2',
			productRow:'pl-2 pr-2',
			empty: 'm-8 p-8',
			button: '',
			container: 'p-4',
			image: {
				width:32,
				// heigth:32
			}
		}
	);
}

export default ManageOpenShopCard;
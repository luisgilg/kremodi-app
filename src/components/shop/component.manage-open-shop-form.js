import { AppBar, Button, Container, Dialog, DialogContent, IconButton, Paper, TextField, Toolbar, Typography, Divider } from '@material-ui/core';
import { Close as CloseIcon, Save } from '@material-ui/icons';
import React, { Component } from 'react';
import moment from 'moment';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/action.products';

const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn
};


class ManageOpenShopForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openShop: null
		};
	}

	renderForm = ({
		openShop: {
			id, title, subtitle, products, startDate, endDate
		}, classes, products: productsSource = []
	}) => {

		const lookup = {};
		productsSource.forEach(({id, title}) =>lookup[id] = title );
	
		const columns = [
			{
				title: "Producto",
				field: "productId",
				lookup
			},
			{
				title: "Total",
				field: "total"
			},
			{
				title: "Disponible",
				field: "available"
			}
		];
		

		return (
			<form>
				<TextField
					id="id"
					label="Id"
					type="text"
					className={classes.field}
					InputProps={{
						readOnly: true,
					}}
					variant="filled"
					fullWidth
					margin="normal"
					value = {id}
				/>
				<TextField
					autoFocus
					id="title"
					label="Nombre"
					type="text"
					className={classes.field}
					margin="normal"
					defaultValue={title}
					onChange={({ target }) => this.setState(prev =>({
						openShop: {
							...prev.openShop,
							title: target.value
						}
					}))}
				/>
				<TextField
					id="subtitle"
					label="Subtitulo"
					type="text"
					className={classes.field}
					margin="normal"
					defaultValue={subtitle}
					onChange={({ target }) => this.setState(prev =>({
						openShop: {
							...prev.openShop,
							subtitle: target.value
						}
					}))}
				/>

				<TextField
					id="startDate"
					label="Inicia"
					type="date"
					className={classes.field}
					margin="normal"
					defaultValue={moment(startDate).format('YYYY-MM-DD')}
					onChange={({ target }) => this.setState(prev =>({
						openShop: {
							...prev.openShop,
							startDate: target.value
						}
					}))}
				/>

				<TextField
					id="endDate"
					label="Termina"
					type="date"
					className={classes.field}
					margin="normal"
					defaultValue={moment(endDate).format('YYYY-MM-DD')}
					onChange={({ target }) => this.setState(prev =>({
						openShop: {
							...prev.openShop,
							endDate:target.value
						}
					}))}
				/>

				<MaterialTable				
					icons = {tableIcons}
					columns={columns}
					data={this.state.openShop && this.state.openShop.products ? this.state.openShop.products : products}
					title="Productos"
					editable={
						{
							onRowAdd: newData =>new Promise(resolve => {
								const data = [...(this.state.openShop && this.state.openShop.products ? this.state.openShop.products : products )];
								let _newData = {...newData};
								
								if (newData.productId){
									var {id, ...source} = productsSource.find(x=>x.id === newData.productId);
									if (source){
										_newData = {...newData, ...source};
									}		
								}

								data.push(_newData);
								resolve();
								this.setState(prev =>({
									openShop: {
										...prev.openShop,
										products: data
									}
								}));
							}),
							onRowUpdate: (newData, olData) => new Promise(resolve => {
								const data = [...(this.state.openShop && this.state.openShop.products ? this.state.openShop.products : products )];
								data[data.indexOf(olData)] = newData;
								resolve();
								this.setState(prev =>({
									openShop: {
										...prev.openShop,
										products: data
									}
								}));
							}),
							onRowDelete: (oldData) =>new Promise(resolve => {
								const data = [...(this.state.openShop && this.state.openShop.products ? this.state.openShop.products : products )];
								data.splice(data.indexOf(oldData), 1);
								resolve();
								this.setState(prev =>({
									openShop: {
										...prev.openShop,
										products: data
									}
								}));
							})
						}
					}
				/>
			</form>
		)
	}

	onAction = ()=> {
		this.props.action(this.props, {...this.state});
		this.setState({
			openShop:null
		})
	}

	onToogle = ()=> {
		this.props.toggle(this.props, {...this.state});
		this.setState({
			openShop:null
		})
	}

	render() {
		const { open, openShop, products} = this.props;
		if (!openShop){
			return (<div />);
		}

		const classes = this.useStyles();
		
		return (
			<Dialog
				fullScreen
				open={open}
			>
				<AppBar style={classes.appBar}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={this.onToogle} aria-label="Close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" style={classes.title}>
							Agregar/Editar Apertura de pedido
            </Typography>
						<Button color="inherit" onClick={this.onAction}>
							<Save />
							<span className={classes.saveButton}>Guardar</span>
						</Button>
					</Toolbar>
				</AppBar>
				<DialogContent>
					<Container>
						<Paper className={classes.container}>
							{this.renderForm({classes, openShop, products})}
						</Paper>
					</Container>
				</DialogContent>
			</Dialog>
		)
	}

	useStyles = () => (
		{
			appBar: {
				position: 'relative',
			},
			title: {
				marginLeft: 2,
				flex: 1,
			},
			saveButton: 'ml-2 mr-2',
			field: 'mr-4',
			container: 'p-4',
			productTable: 'mt-4'
		}
	);

	componentDidMount(){
		if (!this.props.products || !this.props.products.length === 0){
			this.props.fetchProducts();
		}
	}
}

const mapStateToProps = ({productsReducer:{products}})=>({
  products
})

const mapDispatchToProps = (dispatch)=>({
	fetchProducts: () => dispatch(fetchProducts())
})


export default connect(mapStateToProps, mapDispatchToProps)(ManageOpenShopForm);
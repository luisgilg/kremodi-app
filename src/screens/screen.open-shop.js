import { Container, Paper, Grid, Box, Fab, Dialog, DialogTitle, Button, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Add as AddIcon, Delete } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onlyAdmin, createOpenShop } from '../utils';
import ManageOpenShopCard from '../components/shop/component.manage-open-shop-card';
import ManageOpenShopForm from '../components/shop/component.manage-open-shop-form';
import _ from 'lodash';
import { fetchOpenShop, pushOpenShop, updateOpenShop, deleteOpenShop } from '../actions/action.open-shop';


class ScreenOpenShop extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: false,
			openShop: null,
			action: ()=>{},
			deleteOpenForm: false,
			openShopToDelete: null
		};
	}

	addOpenShopForm = ()=> this.setState(({open}) => ({
		open: !open,
		openShop: createOpenShop(),
		action: this.save
	}))

	editOpenShopForm = ({openShop})=> this.setState(({open}) => ({
		open: !open,
		openShop,
		action: this.edit
	}))

	toogleDeleteOpenShopForm = ()=> this.setState(({deleteOpenForm}) => ({deleteOpenForm: !deleteOpenForm}))
	toggleForm = ()=> this.setState(({open}) => ({open: !open}))

	deleteAction =  ({openShop})=> this.setState(({deleteOpenForm}) => ({
		deleteOpenForm: !deleteOpenForm,
		openShopToDelete: openShop
	}))

	save= ({openShop: originalData}, {openShop: newData})=>{
		if (newData && newData.products){
			newData.products = _.map(newData.products, x => _.omit(x, ['tableData']));
		}
		const openShop = {...originalData, ...newData};
		this.props.pushOpenShop({openShop});
		this.toggleForm();
	}

	edit= ({openShop: {id}}, {openShop: newData})=>{
		if (newData && newData.products){
			newData.products = _.map(newData.products, x => _.omit(x, ['tableData']));
		}
		const openShop = {id, ...newData};
		this.props.updateOpenShop({openShop});
		this.toggleForm();
	}

	delete = ()=>{
		if (this.state.openShopToDelete){
			const openShop = {...this.state.openShopToDelete};
			this.props.deleteOpenShop({openShop});
			this.setState({
				openShopToDelete: null
			})
		}
		this.toogleDeleteOpenShopForm();
	}


	renderOpenShopCard = ({openShop}) => {
		return (
			<ManageOpenShopCard 
				allowEdit = {true}
				key={openShop.id}
				openShop={openShop}
				editAction={this.editOpenShopForm}
				deleteAction={this.deleteAction}
			/>
		);
	}

	renderOpenShopGridItem = ({ openShop }) => (
		<Grid key={openShop.id} item xs={12} sm={6} md={6}>
			{this.renderOpenShopCard({ openShop})}
		</Grid>
	)

	render(){
		const classes = this.useStyles();
		const {openShops} = this.props;
		const {open, action, openShop, deleteOpenForm} = this.state;

		return (
		<Container>
			<Paper className={classes.container}>
				<Grid container>
					<Grid className={classes.productRow} container spacing={2}>
					{openShops && openShops.map(op => this.renderOpenShopGridItem({openShop: op}))}	
					</Grid>
					<Grid item xs={12}>
						<Box textAlign='right'>
							<Fab className={classes.button} onClick= {this.addOpenShopForm} color="primary" aria-label="Add">
								<AddIcon />
							</Fab>
						</Box>
					</Grid>
				</Grid>
			</Paper>
			<ManageOpenShopForm
				open={open}
				toggle={this.toggleForm}
				openShop={openShop}
				action={action}
			/>

			<Dialog
        open={deleteOpenForm}
        onClose={this.toogleDeleteOpenShopForm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Quieres eliminar?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estas seguro(a) que deseas eliminar este registro?, una vez eliminado no podrá ser recuperado!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.toogleDeleteOpenShopForm} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={this.delete} color="primary">
						<Delete />
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
		</Container>
		)
	}

	useStyles = () => (
		{
			headerDate: 'm-2',
			header: 'm-4',
			productRow:'',
			empty: 'm-8 p-8',
			button: '',
			container: 'p-4'
		}
	);

	componentDidMount(){
		this.props.fetchOpenShop();
	}
}

const mapStateToProps = ({openShopReducer:{openShops}})=>({  
	openShops
});

const mapDispatchToProps = (dispatch)=>({
	fetchOpenShop: ()=> dispatch(fetchOpenShop()), 
	pushOpenShop: (...args)=> dispatch(pushOpenShop(...args)), 
	updateOpenShop: (...args)=> dispatch(updateOpenShop(...args)),
	deleteOpenShop: (...args)=> dispatch(deleteOpenShop(...args))
});

export default onlyAdmin(connect(mapStateToProps, mapDispatchToProps)(ScreenOpenShop));